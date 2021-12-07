
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

function signout(){
// buttonSignIn
localStorage.setItem("isLoggedIn", 0);
window.location = "./login.html";
}



