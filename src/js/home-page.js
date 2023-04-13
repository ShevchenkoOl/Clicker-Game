const form = document.querySelector('.sector');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  localStorage.setItem('name', name);
  window.location.href = 'game-page.html'; 
});