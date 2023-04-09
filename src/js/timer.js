const timer = document.querySelector('#timer');
const modal = document.querySelector('#modal');
const timeResult = document.querySelector('#timeResult');
const totalScore = document.querySelector('#totalScore');
const counter = document.querySelector('#counter');
const closeButton = document.querySelector('.btn');

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let clicks = 0;
let intervalId = null;
let isRunning = false;

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

    if (clicks === 10) {
        clearInterval(intervalId);
        isRunning = false;
        modal.classList.remove("is-hidden");
        timeResult.textContent = `${formattedTime}`;
        totalScore.textContent = `${clicks}`;
      }
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
    clicks = `${clicks}+=1`;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    // timer.textContent = '00:00.00';
    isRunning = false;
    clearInterval(intervalId);
  });
