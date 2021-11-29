"use strict";
// constants for the message from ceo visible / invisible
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const picsShowModal = document.querySelectorAll(".imaj");
const btnCloseModal = document.querySelector(".close-modal");

//function to make the message visible
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//function to make the message invisible
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//loop for selecting all images and activating event listeners to call openModal function
for (let i = 0; i < picsShowModal.length; i++)
  picsShowModal[i].addEventListener("click", openModal);

//closes the ceo message window
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//listens for esc key to close to ceo message window
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
