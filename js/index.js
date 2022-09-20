// const styleEl = document.createElement('style');
// document.head.appendChild(styleEl);
const firstS = document.querySelector('.first-s');
const firstBg = document.querySelector('.cliping');
const stars = document.querySelector('.cliping img');

console.dir(stars)
stars.addEventListener('click', () => {
    stars.style.top = ``;
    console.log(stars.style)
})
// console.dir(stars.clientHeight)
firstS?.addEventListener('mousemove', (e) => {
    if(e.clientY - 255 <= 250) {
        firstBg.style.backgroundPositionX = `${e.clientX}px`;
        firstBg.style.backgroundPositionY = `${e.clientY - 255}px`;
    }
    // styleEl.sheet.insertRule(`.first-s .cliping::before {background-position-y: ${e.clientY}px;}`, 0);
});

const topBtn = document.querySelector('.top-btn');

topBtn.addEventListener('click', () => {
    location.href = '#';
})