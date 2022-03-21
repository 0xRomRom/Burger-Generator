"use strict";

const tryButton = document.querySelector(".btn");
const resetButton = document.querySelector(".btn2");
const hideButton = document.querySelector(".btn3");
const testBlock = document.querySelector(".inner");
const testBlock2 = document.querySelector(".inner2");
const diceEl = document.querySelector(".dice");
// const dice = Math.trunc(Math.random() * 10 + 1);
const hiddenBlock = document.querySelector(".hidden");

// Try me button
tryButton.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 10 + 1);
  diceEl.src = `burger-${dice}.jpg`;
  console.log(dice);
  //   testBlock2.classList.remove("hidden");
});
// Reset button
resetButton.addEventListener("click", function () {
  diceEl.src = `burger-0.jpg`;
});

//Hide Game
hiddenBlock.classList.remove("hidden");
hideButton.addEventListener("click", function () {
  hiddenBlock.classList.toggle("hidden");
  diceEl.src = `burger-0.jpg`;
});
