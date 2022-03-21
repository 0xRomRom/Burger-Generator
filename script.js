"use strict";

const tryButton = document.querySelector(".btn");
const resetButton = document.querySelector(".btn2");
const hideButton = document.querySelector(".btn3");
const diceEl = document.querySelector(".dice");
const hiddenBlock = document.querySelector(".hidden");
hiddenBlock.classList.remove("hidden");

// Try me button
tryButton.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 10 + 1);
  diceEl.src = `Burgers/burger-${dice}.jpg`;
});

// Reset button
resetButton.addEventListener("click", () => {
  diceEl.src = `burgers/burger-0.jpg`;
});

//Hide App
hideButton.addEventListener("click", () => {
  hiddenBlock.classList.toggle("hidden");
  diceEl.src = `burgers/burger-0.jpg`;
});
