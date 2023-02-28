"Use strick"

// =========================== Stop Watch =========================

// General Variables
const displayTime = document.querySelector(
  ".stopWatch__box .stopWatch__display"
);
const startBtn = document.querySelector("#stopWatch__startBtn");
const stop_btn = document.querySelector("#stopWatch__stopBtn");
const reset_btn = document.querySelector("#stopWatch__resetBtn");

let seconds = 0;
let interval = null;

startBtn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

function timer() {
  seconds++;

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  displayTime.innerText = `${hrs}:${mins}:${secs}`;
}

function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  displayTime.innerText = "00:00:00";
}