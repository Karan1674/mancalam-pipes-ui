// ===== MOBILE MENU ELEMENTS =====
// Selecting hamburger, navigation menu, and overlay
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

// ===== TOGGLE MOBILE MENU =====
// Opens/closes menu and toggles overlay + scroll lock
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// ===== CLOSE MENU ON OVERLAY CLICK =====
// Closes menu when user clicks outside
overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
});




// ===== STICKY HEADER SCROLL LOGIC =====
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const firstFold = window.innerHeight;


  if (currentScroll <= 50) {
    header.classList.remove("hide");
    return; 
  }

  if (currentScroll > firstFold) {
    if (currentScroll > lastScroll) {
      header.classList.remove("hide");
    } else {
      header.classList.add("hide");
    }
  } else {
    header.classList.add("hide");
  }

  lastScroll = currentScroll;
});


