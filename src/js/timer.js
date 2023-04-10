const timer = document.querySelector('#timer');
const modal = document.querySelector('#modal');
const timeResult = document.querySelector('#timeResult');
const totalScore = document.querySelector('#totalScore');
const counter = document.querySelector('#counter');
const closeButton = document.querySelector('#next-level');
const level = document.querySelector('#level');
const finish = document.querySelector('#finish');

const images = [
  '/src/images/1665061140_3-5.jpg',
  '/src/images/1665061142_3-9.jpg',
  '/src/images/1665061152_3-10.jpg',
  '/src/images/1665061184_3-6.jpg'
];

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let clicks = 0;
let stage = 1;
let intervalId = null;
let isRunning = false;
let isModalOpen = false;

function displayTime() {
  milliseconds++;

  if (milliseconds >= 99){
    seconds++;
    milliseconds = 0;
  }

  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  } 

const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString()
    .padStart(2, "0")}`;
    timer.textContent = formattedTime;

    if (clicks % 5 === 0) {
        clearInterval(intervalId);
        isRunning = false;
        modal.classList.remove("is-hidden");
        timeResult.textContent = `${formattedTime}`;
        totalScore.textContent = `${clicks}`;
        //isModalOpen = true;
        
      }
}

function changeBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const imageUrl = images[randomIndex];
  document.body.style.backgroundImage = `url(${imageUrl})`;
  level.textContent = `${(stage +=1)}`
}


window.addEventListener("click", function() {
  if (!modal.classList.contains("is-hidden")) {
    return;
  }  
  
  if (!isRunning) {
      isRunning = true;
      intervalId = setInterval(displayTime, 1);
    }
    counter.textContent = `${(clicks +=1)}`;
    
  });

  closeButton.addEventListener('click', function() {
    modal.classList.add('is-hidden');
    // clicks = `${clicks}+=1`;
    //  minutes = 0;
    //  seconds = 0;
    //  milliseconds = 0;
    // // // timer.textContent = '00:00.00';
    //  isRunning = false;
     isModalOpen = true;
    // clearInterval(intervalId);
    changeBackgroundImage();
  });

  // finish.addEventListener('click', function() {
  //   //modal.classList.add('is-hidden');
  //   window.location.href = '../index.html';
  // });
