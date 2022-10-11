const firstSection = document.querySelector('.first-s');
const twoSection = document.querySelector('.two-s');
const threeSection = document.querySelector('.three-s');

const starFallCreate = () => {
    return (
        `<svg class="small" width="9.9vw" height="10vw" viewBox="0 0 190 130" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M37 94.5C59.5 68.8333 121.5 14.2 189.5 1" stroke="black" />
        <path class="squere" fill-rule="evenodd" clip-rule="evenodd"
            d="M19 95C18.8374 100.531 15.3762 111.308 3.091 112.409C2.34078 112.395 1.63662 112.429 1 112.5C1.72388 112.5 2.42058 112.469 3.091 112.409C9.40908 112.525 18.993 116.053 19 129.985C19 129.987 19 129.99 19 129.992C19 129.99 19 129.987 19 129.985C19.007 116.053 28.5909 112.525 34.909 112.409C35.5794 112.469 36.2761 112.5 37 112.5C36.3634 112.429 35.6592 112.395 34.909 112.409C22.6238 111.308 19.1626 100.531 19 95Z"
            fill="white" />
        <path class="squere"
            d="M19 95L19.4998 94.9853L18.5002 94.9853L19 95ZM1 112.5L0.944784 112.003L1 113V112.5ZM37 112.5V113L37.0552 112.003L37 112.5ZM3.13561 112.907C9.43958 112.342 13.5056 109.284 16.0036 105.649C18.4889 102.033 19.4162 97.858 19.4998 95.0147L18.5002 94.9853C18.4212 97.6734 17.5367 101.653 15.1794 105.083C12.8348 108.494 9.02759 111.375 3.04638 111.911L3.13561 112.907ZM1.05522 112.997C1.66964 112.929 2.35228 112.895 3.08182 112.909L3.10017 111.909C2.32929 111.895 1.60359 111.93 0.944784 112.003L1.05522 112.997ZM3.04639 111.911C2.39129 111.969 1.70948 112 1 112V113C1.73827 113 2.44986 112.968 3.13561 112.907L3.04639 111.911ZM19.5 129.985C19.4964 122.892 17.0483 118.377 13.731 115.631C10.4324 112.9 6.33558 111.968 3.10017 111.909L3.08182 112.909C6.1645 112.965 10.0187 113.856 13.0933 116.401C16.1492 118.931 18.4966 123.146 18.5 129.985L19.5 129.985ZM19.5 129.992C19.5 129.991 19.5 129.989 19.5 129.988C19.5 129.987 19.5 129.986 19.5 129.985H18.5C18.5 129.986 18.5 129.987 18.5 129.989C18.5 129.99 18.5 129.991 18.5 129.992H19.5ZM19.5 129.992C19.5 129.991 19.5 129.989 19.5 129.988C19.5 129.987 19.5 129.986 19.5 129.985H18.5C18.5 129.986 18.5 129.987 18.5 129.989C18.5 129.99 18.5 129.991 18.5 129.992H19.5ZM19.5 129.985C19.5034 123.146 21.8507 118.931 24.9067 116.401C27.9813 113.856 31.8355 112.965 34.9182 112.909L34.8998 111.909C31.6644 111.968 27.5676 112.9 24.269 115.631C20.9517 118.377 18.5035 122.892 18.5 129.985L19.5 129.985ZM34.8644 112.907C35.5501 112.968 36.2617 113 37 113V112C36.2905 112 35.6087 111.969 34.9536 111.911L34.8644 112.907ZM37.0552 112.003C36.3964 111.93 35.6707 111.895 34.8998 111.909L34.9182 112.909C35.6477 112.895 36.3304 112.929 36.9448 112.997L37.0552 112.003ZM34.9536 111.911C28.9724 111.375 25.1652 108.494 22.8206 105.083C20.4633 101.653 19.5788 97.6734 19.4998 94.9853L18.5002 95.0147C18.5838 97.858 19.5111 102.033 21.9965 105.649C24.4944 109.284 28.5604 112.342 34.8644 112.907L34.9536 111.911Z"
            fill="black" />
    </svg>`
    )
}

const innerStar = (section) => {
    // console.log(section)
    const randomScale = ((Math.random() * 0.4) + 0.8).toFixed(1);
    const randomLeft = Math.floor(Math.random() * 90);
    const randomTop = Math.floor(Math.random() * 90);
    const star = document.createElement('div');
    star.classList.add('star-fall');
    star.innerHTML = starFallCreate();
    section.appendChild(star);
    // console.log(section.classList[0])
    const currentStar = document.querySelector(`.${section.classList[0]} .star-fall:last-child`);
    const length = Math.floor(currentStar.getBoundingClientRect().width);
    currentStar.style.left = `${randomLeft}%`;
    currentStar.style.top = `${randomTop}%`;
    currentStar.children[0].style.transform = `scale(${randomScale})`;
    currentStar.addEventListener('animationend', () => {
        section.removeChild(currentStar);
    });
};

const randomTime = (section) => {
    let sec = Math.floor(Math.random() * 9) + 1;
    setTimeout(() => {
        innerStar(section);
    }, sec * 1000);
}

const firstStar = () => {
    randomTime(firstSection);
    randomTime(firstSection);
    randomTime(firstSection);
    randomTime(firstSection);
    randomTime(firstSection);
}
const twoStar = () => {
    randomTime(twoSection);
    randomTime(twoSection);
    randomTime(twoSection);
    randomTime(twoSection);
    randomTime(twoSection);
}
const threeStar = () => {
    randomTime(threeSection);
    randomTime(threeSection);
    randomTime(threeSection);
    randomTime(threeSection);
    randomTime(threeSection);
}

const randomCreate = setInterval(() => {
    firstStar();
    twoStar();
    threeStar();
}, 3000);