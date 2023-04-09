const timer = document.querySelector('#timer');
const modal = document.querySelector('#modal');
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

    if (clicks === 5) {
        clearInterval(intervalId);
        isRunning = false;
        modal.classList.remove("is-hidden");
      }
}

window.addEventListener("click", function() {
    if (!isRunning) {
      isRunning = true;
      intervalId = setInterval(displayTime, 1);
    }
    clicks++;
  });

  // (() => {
  //   const refs = {
  //     openModalBtn: document.querySelector("[data-modal-open]"),
  //     closeModalBtn: document.querySelector("[data-modal-close]"),
  //     modal: document.querySelector("[data-modal]"),
  
  
  //   refs.openModalBtn.addEventListener("click", toggleModal);
  //   refs.closeModalBtn.addEventListener("click", toggleModal);
  
  //   function toggleModal() {
  //     refs.modal.classList.toggle("is-hidden");
  //   }
  // })();