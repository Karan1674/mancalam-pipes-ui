
// ===== APPLICATION SLIDER =====

// Elements
const slider = document.getElementById("appSlider");
const applicationNextBtn = document.querySelector(".app_btn.next");
const applicationPrevBtn = document.querySelector(".app_btn.prev");

// Card width calculation
const card = document.querySelector(".app_card");
const gap = 16;
const scrollAmount = card.offsetWidth + gap;


// Initial scroll position
window.addEventListener("load", () => {
  slider.scrollLeft = 120;
});


// Update button states (disable/enable)
function updateButtons() {
  const maxScroll = slider.scrollWidth - slider.clientWidth;

  if (slider.scrollLeft <= 5) {
    applicationPrevBtn.classList.add("disabled");
  } else {
    applicationPrevBtn.classList.remove("disabled");
  }

  if (slider.scrollLeft >= maxScroll - 5) {
    applicationNextBtn.classList.add("disabled");
  } else {
    applicationNextBtn.classList.remove("disabled");
  }
}


// NEXT BUTTON
applicationNextBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
});


// PREVIOUS BUTTON
applicationPrevBtn.addEventListener("click", () => {

  if (slider.scrollLeft <= scrollAmount) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  } else {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  }

});


// SCROLL WITH MOUSE WHEEL (horizontal scroll behavior)
slider.addEventListener("wheel", (e) => {
  slider.scrollBy({
    left: e.deltaY,
    behavior: "smooth"
  });

}, { passive: false });

// SCROLL LISTENER
slider.addEventListener("scroll", updateButtons);

// INITIAL STATE
updateButtons();



