import { skillArr } from "./skill.js";
import { detailArr, article } from "./slide.js"

const newSkillArr = ['redux', ...skillArr.filter(item => item !== 'ai' && item !== 'ps')];

let nowSkill = (idx) => {
    return newSkillArr.filter(item => detailArr[idx].skill.includes(item));
}

const detailImgLine = document.createElement('object');
detailImgLine.id = 'object';
detailImgLine.type = "image/svg+xml";
const detailImgFill = document.createElement('object');
detailImgFill.id = 'object2';
detailImgFill.type = "image/svg+xml";

const detailBg = document.querySelector('.detail-bg');
const detailBgTitle = document.querySelector('.detail-bg .title');
const detailBgImgWrap = document.querySelector('.detail-bg .detail-img');
const detailBgType = document.querySelector('.detail-bg .type span');
const detailBgDes = document.querySelector('.detail-bg .des');
const detailBgSkill = document.querySelector('.detail-bg .skill-list');
const seeBtn = document.querySelector('.see-more');
const closeBtn = document.querySelector('.close-btn');

article.forEach((item, idx) => item.addEventListener('click', () => {
    if(item.classList.contains('select')) {
        item.classList.add('click');
        setTimeout(() => {
            detailBg.classList.add('on');
        }, 700);
    }
    const detailData = detailArr[idx];
    detailBgSkill.innerHTML = newSkillArr.map(item => {
        if (nowSkill(idx).includes(item)){
            return `<img class="skill-on" src="../img/${item}.svg" alt=${item} />`
        }
        else {
            return `<img class="skill-off" src="../img/${item}Line.svg" alt=${item} />`
        }
    }
    ).join('');    
    detailBgTitle.innerHTML = detailData.title;
    detailImgLine.data = `../img/${detailData.img}.svg`;
    detailBgImgWrap.appendChild(detailImgLine);
    detailImgFill.data = `../img/${detailData.img}Fill.svg`;
    detailBgImgWrap.appendChild(detailImgFill);
    detailBgType.innerHTML = detailData.type;
    detailBgDes.innerHTML = detailData.des;
    seeBtn.setAttribute('href', detailData.link);
    const object = document.getElementById('object');
    object.addEventListener('load', () => {
        // console.log(object.contentDocument.documentElement);
        // 돔 상에서 겉으로 보기에 외부 파일이 로딩된 것처럼 보여도 실상은 아니기에
        // 로딩이 될 때까지 기다려줘야 document 내부를 뱉어냄
        object.contentDocument.documentElement.classList.add('sw-detail-line');
        object.contentDocument.documentElement.addEventListener('animationend', () => {
            detailImgLine.style.opacity = '0';
            detailImgFill.style.opacity = '1';
        })
    });
    // seeBtn.addEventListener('click', (e) => {
        // e.preventDefault();
        // 이거 링크는 계속 바뀌는데 열리는 게 이상
    // })
}));

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    detailBg.classList.remove('on');
    document.querySelector('.select').classList.remove('click');
    document.getElementById('object').style.opacity = 1;
    document.getElementById('object2').style.opacity = 0;
});