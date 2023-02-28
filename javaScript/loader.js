"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader-box");

  setTimeout(() => {
    loader.style.display = "none";
    loader.style.opacity = "0";
  }, 3000);
});