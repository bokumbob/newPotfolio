export const skillArr = ['html', 'css', 'scss', 'javascript', 'typescript', 'react', 'ai', 'ps', 'figma'];

const skillWrap = document.querySelector('.skill-img');

const skillImg = skillArr.map((item) => {
   return `<img src="../img/${item}.svg" />`
});

skillWrap.innerHTML = skillImg.join('');