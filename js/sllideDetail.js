import { skillArr } from "./skill.js";
import { poArr, article } from "./slide.js"

const detailArr = [
    {title: null, img: null, type: '팀', des: '팀 단위로 제작한 롤링 페이퍼 사이트입니다. 백엔드, 프론트, 디자인 셋으로 나눠 분업으로 진행하여 실제 배포해 서비스까지 진행했습니다.'},
    {title: null, img: null, type: '개인', des: '도트 햄스터, 닷-햄을 잡고 게임을 즐길 수 있는 사이트입니다. react와 typescript, scss를 사용해 프론트를 구성하고 firebase 데이터베이스를 이용해 유저의 정보를 관리했습니다.'},
    {title: null, img: null, type: '개인', des: '포트폴리오 사이트입니다. html, css, javascript를 복습하기 위해 셋만 이용해서 제작했습니다.'},
];
poArr.forEach((item, idx) => detailArr[idx].title = item);

const newSkillArr = ['redux', ...skillArr.filter(item => item !== 'ai' && item !== 'ps')];

const detailBg = document.querySelector('.detail-bg');
const detailBgTitle = document.querySelector('.detail-bg .title');
const detailBgImg = document.querySelector('.detail-bg .img');
const detailBgType = document.querySelector('.detail-bg .type span');
const detailBgDes = document.querySelector('.detail-bg .des');
const detailBgSkill = document.querySelector('.detail-bg .skill-list');

console.log()

detailBgSkill.innerHTML = newSkillArr.map(item => `<img src="../img/${item}.svg" alt=${item} />`).join('');

article.forEach((item, idx) => item.addEventListener('click', () => {
    item.classList.contains('select') && detailBg.classList.add('on');
    const detailData = detailArr[idx];
    detailBgTitle.innerHTML = detailData.title;
    detailBgImg.innerHTML = detailData.img;
    detailBgType.innerHTML = detailData.type;
    detailBgDes.innerHTML = detailData.des;
}));

const closeBtn = document.querySelector('.close-btn');

console.log(closeBtn)

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    detailBg.classList.remove('on');
})

// const detailArticle = document.createElement('article');

// const repeatArticle = (title, img, type, des) => {
//     return (
//         `<div class="proD-left">
//             <h3>프로젝트 : ${title}</h3>
//             <img src="../img/${img}.svg" alt="프로젝트 이미지" />
//         </div>
//         <div class="proD-right">
//             <div class="skill-list">
//                 ${newSkillArr.map(item => `<img src="../img/${item}.svg" alt=${item} />`).join('')}
//             </div>
//             <div class="detail-description">
//                 <h4>규모 - ${type} 프로젝트</h4>
//                 <p>${des}</p>
//             </div>
//             <div class="project-btn">
//                 <button class="see-more" type="button">보러가기</button>
//                 <button class="close-btn" type="button">닫기</button>
//             </div>
//         </div>`
//     )
// };
// detailArticle.innerHTML = repeatArticle('닷-햄', 'html', '개인', '어쩌구 저쩌구 왈라왈라 우가우가');

// detailArr.forEach(item => repeatArticle(item.title, item.img, item.type, item.des));