import { skillArr } from "./skill.js";
import { detailArr, article } from "./slide.js"

const newSkillArr = ['redux', ...skillArr.filter(item => item !== 'ai' && item !== 'ps')];
const detailImg = new Image();

const detailBg = document.querySelector('.detail-bg');
const detailBgTitle = document.querySelector('.detail-bg .title');
const detailBgImgWrap = document.querySelector('.detail-bg .detail-img');
const detailBgType = document.querySelector('.detail-bg .type span');
const detailBgDes = document.querySelector('.detail-bg .des');
const detailBgSkill = document.querySelector('.detail-bg .skill-list');

// console.dir(detailBgImg)

detailBgSkill.innerHTML = newSkillArr.map(item => `<img src="../img/${item}.svg" alt=${item} />`).join('');

article.forEach((item, idx) => item.addEventListener('click', () => {
    item.classList.contains('select') && detailBg.classList.add('on');
    const detailData = detailArr[idx];
    detailBgTitle.innerHTML = detailData.title;
    detailImg.src = `../img/${detailData.img}.svg`
    detailBgImgWrap.appendChild(img);
    detailBgType.innerHTML = detailData.type;
    detailBgDes.innerHTML = detailData.des;
}));

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    detailBg.classList.remove('on');
})