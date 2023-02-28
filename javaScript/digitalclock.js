"Use strict"

// =========================== Digital Clock =========================

const clock = document.querySelector("#clock");

window.onload = function () {
  window.setInterval(function () {
    let date = new Date();

    const watchHour =
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const watchMinutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const watchSeconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    clock.innerHTML = `${watchHour}:${watchMinutes}:${watchSeconds}`;
  });
};