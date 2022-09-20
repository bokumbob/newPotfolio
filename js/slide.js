const poArr = ['별말, 씀', '닷-햄', '포트폴리오', '임시'];
const project = document.querySelector('.project-wrap');

let selectNumber = 1;

const projectArticle = poArr.map((item, idx) => {
    return `<article ${selectNumber === idx ? 'class="select"' : ''}><h3>${item}</h3><div></div></article>`
});
project.innerHTML = projectArticle.join('');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const articleWrap = document.querySelector('.project-wrap');
const article = document.querySelectorAll('.project-wrap article');

let left = 0;

const FirstArticle = () => {
    return `<h3>${poArr[poArr.length - 1]}</h3><div></div>`
}
const LastArticle = () => {
    return `<h3>${poArr[0]}</h3><div></div>`
}

const first = document.createElement('article');
first.id = 'remove';
first.innerHTML = FirstArticle();

const last = document.createElement('article');
last.id = 'remove2';
last.innerHTML = LastArticle();


next.addEventListener('click', () => {
    if(selectNumber < article.length - 1) {
        selectNumber ++;
        left -= 22.4;
        selectNumber === poArr.length - 1 && !document.querySelector('#remove2') && articleWrap.insertBefore(last, null)
    }
    else {
        selectNumber = 0;
        left = 0;
        !document.querySelector('#remove') && articleWrap.insertBefore(first, article[0])
    }
    article.forEach((item, idx) => {
     if(selectNumber !== 0) article[selectNumber - 1].classList.remove('select');
     else article[article.length - 1].classList.remove('select');
     if(idx === selectNumber) {
        article[selectNumber].classList.add('select');
        // article[selectNumber].nextSibling.style.transform = 'scale(0.7) rotate(15deg)';
        // article[selectNumber].previousSibling.style.transform = 'scale(0.7) rotate(-15deg)';
    }
    // const select = document.querySelector('.select');
        // console.log(select)
    })
    articleWrap.style.left = `${left}vw`
})

prev.addEventListener('click', () => {
    if(selectNumber >= 1) {
        selectNumber --;
        selectNumber === 0 ? left = 0 : left += 22.4;
        selectNumber === 0 && !document.querySelector('#remove') && articleWrap.insertBefore(first, article[0]);
    }
    else {
        selectNumber = article.length - 1;
        left = -22.4 * (poArr.length - 1);
        selectNumber === poArr.length - 1 && !document.querySelector('#remove2') && articleWrap.insertBefore(last, null)
    }
    article.forEach((item, idx) => {
     if(selectNumber !== article.length - 1) article[selectNumber + 1].classList.remove('select');
     else article[0].classList.remove('select');
     idx === selectNumber && article[selectNumber].classList.add('select');
    })
    articleWrap.style.left = `${left}vw`
})