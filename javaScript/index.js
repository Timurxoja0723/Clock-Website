"Use strick"

// =========================== Analog Clock =========================

//========== Uzbekistan Clock ==========

const burilingClock = 6;
const hourUzb = document.querySelector(".hourUzb");
const minuteUzb = document.querySelector(".minuteUzb")
const secondUzb = document.querySelector(".secondUzb");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * burilingClock;
  let ss = day.getSeconds() * burilingClock;

  hourUzb.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minuteUzb.style.transform = `rotateZ(${mm}deg)`;
  secondUzb.style.transform = `rotateZ(${ss}deg)`;
}, 1000);

//========== Russian Clock ==========

const burilingClockrus = 6;
const russianHourAc = document.querySelector(".russianHour");
const russianSecondAc = document.querySelector(".russianSecond");

setInterval(() => {
  let day = new Date();
  let hhRus = day.getHours() * 30;
  let mmRus = day.getMinutes() * burilingClockrus;
  let ssRus = day.getSeconds() * burilingClockrus;

  russianHourAc.style.transform = `rotateZ(${hhRus + mmRus / 12}deg)`;
  russianMn.style.transform = `rotateZ(${mmRus}deg)`;
  russianSecondAc.style.transform = `rotateZ(${ssRus}deg)`;
}, 1000);
