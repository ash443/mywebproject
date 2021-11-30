const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs div");
console.log(img);
let idx = 0;
//let interval = setInterval(run, 5000);

function run() {
  idx++;
  changeImage();
}
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 5000);
}
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
 // resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
//  resetInterval();
});


// //Hamburger
// 

// hamburger.addEventListener("click",()=>{
  
// })

function hamburgerClicked(){
  const sidepanel = document.getElementById("sidepanel");
  sidepanel.style.width = "90vw";
}
function closeHamburger(){
  const sidepanel = document.getElementById("sidepanel");
  sidepanel.style.width = "0vw";
}

document.querySelector("#signin").addEventListener("click",()=>{
  // buttonSignIn
  localStorage.setItem("isLoggedIn",0);
  window.location = "./login.html";

})
