let counter = 0;
let  numberClick = document.querySelector('#counter');

window.addEventListener('click', () => {
  numberClick.textContent = `${(counter +=1)}`
});
