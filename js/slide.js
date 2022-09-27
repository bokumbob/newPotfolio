export const poArr = ['별말, 씀', '닷-햄', '포트폴리오'];
export const detailArr = [
    {title: null, img: 'starWrite', type: '팀', des: '팀 단위로 제작한 롤링 페이퍼 사이트입니다. 백엔드, 프론트, 디자인 셋으로 나눠 분업으로 진행하여 실제 배포해 서비스까지 진행했습니다.'},
    {title: null, img: 'dotHam', type: '개인', des: '도트 햄스터, 닷-햄을 잡고 게임을 즐길 수 있는 사이트입니다. react와 typescript, scss를 사용해 프론트를 구성하고 firebase 데이터베이스를 이용해 유저의 정보를 관리했습니다.'},
    {title: null, img: 'poLogo', type: '개인', des: '포트폴리오 사이트입니다. html, css, javascript를 복습하기 위해 셋만 이용해서 제작했습니다.'},
];
poArr.forEach((item, idx) => detailArr[idx].title = item);
const project = document.querySelector('.project-wrap');
const moveLength = 22.4;

let selectNumber = 0;

const slideImg = new Image();

const projectArticle = poArr.map((item, idx) => {
    return `<article ${selectNumber === idx ? 'class="select"' : ''}><h3>${item}</h3><div><img src="../img/${detailArr[idx].img}.svg" src="프로젝트 이미지" /></div></article>`
});
project.innerHTML = projectArticle.join('');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const articleWrap = document.querySelector('.project-wrap');
export const article = document.querySelectorAll('.project-wrap article');

let left = 0;

const FirstArticle = () => {
    return `<h3>${poArr[poArr.length - 1]}</h3><div><img src="../img/${detailArr[detailArr.length - 1].img}.svg" src="프로젝트 이미지" /></div></div>`
}
const LastArticle = () => {
    return `<h3>${poArr[0]}</h3><div><img src="../img/${detailArr[0].img}.svg" src="프로젝트 이미지" /></div></div>`
}

const first = document.createElement('article');
first.id = 'remove';
first.style.transform = 'scale(0.7) rotate(-15deg)';
first.innerHTML = FirstArticle();
!document.querySelector('#remove') && articleWrap.insertBefore(first, article[0])

const last = document.createElement('article');
last.id = 'remove2';
last.style.transform = 'scale(0.7) rotate(15deg)';
last.innerHTML = LastArticle();
!document.querySelector('#remove2') && articleWrap.insertBefore(last, null);

next.addEventListener('click', () => {
    if(selectNumber < article.length - 1) {
        selectNumber ++;
        left -= moveLength;
    }
    else {
        selectNumber = 0;
        left = 0;
    }
    article.forEach((item, idx) => {
     if(selectNumber !== 0) article[selectNumber - 1].classList.remove('select');
     else article[article.length - 1].classList.remove('select');
     if(idx === selectNumber) {
        article[selectNumber].classList.add('select');
        article.forEach((item, idx) => {if(idx < selectNumber) item.style.transform = 'scale(0.7) rotate(-15deg)';})
        article.forEach((item, idx) => {if(idx > selectNumber) item.style.transform = 'scale(0.7) rotate(15deg)';})
    }
    })
    articleWrap.style.left = `${left}vw`;
})

prev.addEventListener('click', () => {
    if(selectNumber >= 1) {
        selectNumber --;
        selectNumber === 0 ? left = 0 : left += moveLength;
    }
    else {
        selectNumber = article.length - 1;
        left = -moveLength * (poArr.length - 1);
    }
    article.forEach((item, idx) => {
     if(selectNumber !== article.length - 1) article[selectNumber + 1].classList.remove('select');
     else article[0].classList.remove('select');
     if(idx === selectNumber) {article[selectNumber].classList.add('select');
     article[selectNumber].style.transform = 'scale(1) rotate(0deg)';
     article[selectNumber].nextSibling.style.transform = 'scale(0.7) rotate(15deg)';
     article[selectNumber].previousSibling.style.transform = 'scale(0.7) rotate(-15deg)';
    }
    });
    articleWrap.style.left = `${left}vw`
})