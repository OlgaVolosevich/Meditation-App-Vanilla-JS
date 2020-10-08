"use strict";
window.onload = function () {
  const instructionText = document.getElementById("relaxer__text");
  const movingCircle = document.getElementsByClassName("relaxer__inner-circle")[0];
  const TOTAL_TIME = 7500;
  const HOLD_TIME = 1500;

 function showInstructions () {
  instructionText. innerText = "Breath in";
  movingCircle.classList.toggle("grow");
  setTimeout(() => {
    instructionText. innerText = "Hold";
    setTimeout(() => {
      instructionText. innerText = "Breath out";
      movingCircle.classList.toggle("grow")
    }, HOLD_TIME);
  },(TOTAL_TIME - HOLD_TIME) / 2)
 }
 showInstructions()

 setInterval(showInstructions, 7500);
};

