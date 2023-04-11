const timer = document.querySelector("#timer");
const modal = document.querySelector("#modal");
const timeResult = document.querySelector("#timeResult");
const totalScore = document.querySelector("#totalScore");
const counter = document.querySelector("#counter");
const closeButton = document.querySelector("#next-level");
const level = document.querySelector("#level");
const finish = document.querySelector("#finish");
const ork = document.querySelector(".ork");

const images = [
  "/src/images/background-1.jpg",
  "/src/images/background-2.jpg",
  "/src/images/background-3.jpg",
  "/src/images/background-4.jpg",
  "/src/images/background-5.jpg"
];

const animation = [
  "/src/images/ork-1.png",
  "/src/images/ork-2.png",
  "/src/images/ork-3.png",
  "/src/images/ork-4.png",
  "/src/images/ork-5.png"
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

  if (milliseconds >= 99) {
    seconds++;
    milliseconds = 0;
  }

  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
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
  level.textContent = `${(stage += 1)}`;
  changeAnimationImage();
}

function changeAnimationImage() {
  const randomIndex = Math.floor(Math.random() * animation.length);
  const animationUrl = animation[randomIndex];
  const animationElement = document.querySelector("#animation");
  animationElement.src = animationUrl;
}

ork.addEventListener("click", function () {
  
  if (!modal.classList.contains("is-hidden")) {
    return;
  }

  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(displayTime, 1);
  }
  counter.textContent = `${(clicks += 1)}`;
});

closeButton.addEventListener("click", function () {
  modal.classList.add("is-hidden");
  isModalOpen = true;
  changeBackgroundImage();
  changeAnimationImage();
});

finish.addEventListener('click', function() {
  //modal.classList.add('is-hidden');
  window.location.href = "/index.html";
});
