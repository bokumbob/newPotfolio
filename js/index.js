const firstS = document.querySelector('.first-s');
const firstBg = document.querySelector('.cliping');
const stars = document.querySelector('.cliping img');
const twoS = document.querySelector('.two-s');

const vw = Math.floor(window.innerWidth / 100);

let topMove = 0;
let starTopMove = 0;
let starLeftMove = 0;

// console.log()
// console.log(firstBg.getBoundingClientRect())

// 이 부분 vw 로 계산해주긱 필요
stars.addEventListener('click', (e) => {
    stars.style.top = `${e.clientX}px`;
})
firstS?.addEventListener('mousemove', (e) => {
    topMove = e.clientY - 255;
    starTopMove = e.clientY;
    starLeftMove = e.clientX - 870;

    if(e.clientY - (7.5 * vw) <= 10) {
        topMove = 10;
    } else if (e.clientY - 255 >= 250) {
        topMove = 250;
    }
    if(e.clientY - (7.5 * vw) <= 350) {
        starTopMove = 350;
    } else if(e.clientY >= 750) {
        starTopMove = 750;
    }
     if(e.clientX - firstBg.getBoundingClientRect().left <= 150 ) {
        // stars.style.left = `${e.clientX - 870}px`;
        starLeftMove = 150;
    } else if (e.clientX - firstBg.getBoundingClientRect().left >= 500) {
        starLeftMove = 500; 
    }
    
    stars.style.left = `${starLeftMove / vw}vw`;
    stars.style.top = `${starTopMove / vw}vw`;
    firstBg.style.backgroundPositionY = topMove / vw > 10 ? '10vw' : `${topMove / vw}vw`;
});

const topBtn = document.querySelector('.top-btn');

topBtn.addEventListener('click', () => {
    location.href = '#';
})

window.addEventListener('scroll', () => {
    if(twoS.classList.length === 1 && scrollY >= twoS.offsetTop / 2) twoS.classList.add('on');  
})