let timer = document.querySelector('#timer');
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
//let hours = 0;
let clicks = 0;
let intervalId = null;
let isRunning = false;
const modal = document.querySelector('#modal');
console.log(modal);

function displayTime() {
  milliseconds++;

  if (milliseconds >= 220){
    seconds++;
    milliseconds = 0;
  }

  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }

//   if (minutes >= 60) {
//     hours++;
//     minutes = 0;
//   }

//   const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
//     .toString()
//     .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
//     .toString()
//     .padStart(2, "0")}`;
//     timer.textContent = formattedTime;
// }
 

const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString()
    .padStart(2, "0")}`;
    timer.textContent = formattedTime;

    if (clicks === 5) {
        clearInterval(intervalId);
        isRunning = false;
        //addEventListener("click", toggleModal);
        //modal.style.display = 'block';
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