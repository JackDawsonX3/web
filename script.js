const startPage = document.getElementById('start-page');
const infoPage = document.getElementById('info-page');
const startButton = document.getElementById('start-button');
const backButton = document.getElementById('back-button');


startButton.addEventListener('click', () => {
  startPage.classList.add('hidden'); 
  infoPage.classList.remove('hidden');
});


backButton.addEventListener('click', () => {
  infoPage.classList.add('hidden'); 
  startPage.classList.remove('hidden');
});