export const poArr = ['별말, 씀', '닷-햄', '포트폴리오'];
export const detailArr = [
    {title: null, skill: ['html', 'css', 'scss', 'javascript', 'typescript', 'react', 'styledComponent'], img: 'starWrite', type: '팀', des: '팀 단위로 제작한 롤링 페이퍼 사이트입니다(현재 서비스 중단 상태). 백엔드, 프론트, 디자인 셋으로 나눠 분업으로 진행하여 실제 배포해 서비스까지 진행했습니다. 서비스 후에도 QA를 통한 버그 수정, 코드 리팩토링 등을 진행하고 있습니다. 회원가입 파트, 튜토리얼, 페이퍼 상세보기 화면에서 나오는 메세지 기능과 스티커 기능을 담당했습니다.', link:'https://github.com/bokumbob/jtm-fe'},
    {title: null, skill: ['redux', 'html', 'css', 'scss', 'javascript', 'typescript', 'react', 'figma', 'styledComponent', 'firebase'], img: 'dotHam', type: '개인', des: '도트 햄스터, 닷-햄을 잡고 게임을 즐길 수 있는 사이트입니다. react와 typescript, scss를 사용해 프론트를 구성하고 firebase 데이터베이스를 이용해 유저의 정보를 관리했습니다.', link:'http://dotham.dothome.co.kr'},
    {title: null, skill: ['html', 'css', 'javascript', 'figma'], img: 'poLogo', type: '개인', des: '포트폴리오 사이트입니다. html, css, javascript를 복습하기 위해 셋만 이용해서 제작했습니다.', link:'#'},
];
poArr.forEach((item, idx) => detailArr[idx].title = item);
const project = document.querySelector('.project-wrap');
const columns = (num) => {
    let str = '';
    for(let i = 0; i <= num; i++){
        str = str + '1fr ';
    };
    return str;
};
project.style.gridTemplateColumns = columns(poArr.length + 2);
const moveLength = 22.4;

let selectNumber = 0;

const projectArticle = poArr.map((item, idx) => {
    return `<article ${selectNumber === idx ? 'class="select"' : ''}><h3>${item}</h3><div><img src="../img/${detailArr[idx].img}.svg" src="프로젝트 이미지" /> <img class="slide-fill" src="../img/${detailArr[idx].img}Fill.svg" src="프로젝트 이미지 채색" /> </div></article>`
});
project.innerHTML = projectArticle.join('');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const articleWrap = document.querySelector('.project-wrap');
export const article = document.querySelectorAll('.project-wrap article');
article.forEach((item, idx) => {if(idx < selectNumber) item.style.transform = 'scale(0.7) rotate(-15deg)';})
article.forEach((item, idx) => {if(idx > selectNumber) item.style.transform = 'scale(0.7) rotate(15deg)';})

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

const btnCommonFunction = () => {
    article[selectNumber].classList.add('select');
    const hide = article[selectNumber].querySelector('img');
    const show = article[selectNumber].querySelector('img.slide-fill');
    hide.style.opacity = '0';
    show.style.opacity = '1';
   article.forEach((item, idx) => {if(!item.classList.contains('select')) {
       item.querySelector('img').style.opacity = '1';         
       item.querySelector('img.slide-fill').style.opacity = '0';         
   }})
   article.forEach((item, idx) => {if(idx < selectNumber) item.style.transform = 'scale(0.7) rotate(-15deg)';})
   article.forEach((item, idx) => {if(idx > selectNumber) item.style.transform = 'scale(0.7) rotate(15deg)';})
}

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
     if(idx === selectNumber) btnCommonFunction();
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
     if(idx === selectNumber) btnCommonFunction();
    });
    articleWrap.style.left = `${left}vw`
})