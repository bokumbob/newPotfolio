const main = document.querySelector('main');
const firstS = document.querySelector('.first-s');
const firstBg = document.querySelector('.cliping');
const stars = document.querySelector('.cliping img');
const twoS = document.querySelector('.two-s');

// const vw = Math.floor(window.innerWidth / 100);
const per = Math.floor(firstBg.getBoundingClientRect().width / 100);

let topMove = 0;
let starTopMove = 0;
let starLeftMove = 0;

// console.log()
// console.log(firstBg.getBoundingClientRect())

stars.addEventListener('click', (e) => {
    stars.style.top = `${e.clientX}px`;
})

firstS?.addEventListener('mousemove', (e) => {
    if(innerWidth >= 1300) {
        topMove = (e.clientY - 255) / per;
        starTopMove = (e.clientY - 100) / per;
        starLeftMove = (e.clientX - 1000) / per;
    
        if(topMove <= 5) {
            topMove = 5;
        } else if (topMove >= 100) {
            topMove = 100;
        }
        if(starTopMove <= 25) {
            starTopMove = 25;
        } else if(starTopMove >= 70) {
            starTopMove = 70;
        }
         if(starLeftMove <= 3 ) {
            starLeftMove = 3;
        } else if (starLeftMove >= 65) {
            starLeftMove = 65; 
        }
        
        stars.style.left = `${starLeftMove}%`;
        stars.style.top = `${starTopMove}%`;
        firstBg.style.backgroundPositionY = `${topMove}%`;
    }
});

const topBtn = document.querySelector('.top-btn');

topBtn.addEventListener('click', () => {
    location.href = '#';
});

window.addEventListener('scroll', () => {
    if(twoS.classList.length === 1 && scrollY >= twoS.offsetTop / 2) twoS.classList.add('on');  
});

if(innerWidth <= 700) {
    // alert('pc에 제일 최적화 되어 있으므로 pc로 보시는 걸 권장 드립니다!');
    twoS.classList.add('on');
};