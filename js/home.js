const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs div");
console.log(img);
let idx = 0;
function changeImage() {
  if (idx > Math.ceil(img.length / 3) - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = Math.ceil(img.length / 3) - 1;
  }

  imgs.style.transform = `translateX(${-idx * 100}%)`;
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
});

function hamburgerClicked() {
  const sidepanel = document.getElementById("sidepanel");
  sidepanel.style.width = "90vw";
}
function closeHamburger() {
  const sidepanel = document.getElementById("sidepanel");
  sidepanel.style.width = "0vw";
}

document.querySelector("#signin").addEventListener("click", () => {
  // buttonSignIn
  localStorage.setItem("isLoggedIn", 0);
  window.location = "./login.html";
});

function moreButtonClicked() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropdown")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function headerButtonClicked(button) {
  let buttonText = button.firstElementChild.firstChild.textContent;

  if (buttonText === "Flights") window.location = "./flight.html";
  if (buttonText === "Car Hire") window.location = "./carhire.html";
}

function signout(){
  // buttonSignIn
  localStorage.setItem("isLoggedIn", 0);
  window.location = "./login.html";
  }
