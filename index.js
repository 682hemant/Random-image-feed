const conatiner = document.querySelector('.container');
const unplashURL = 'https://source.unsplash.com/random/';
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${unplashURL}${getRandomSize()}`
  conatiner.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}*${getRandomNr()}`
}

function getRandomNr() {
  return Math.floor(Math.random() * 10)
}