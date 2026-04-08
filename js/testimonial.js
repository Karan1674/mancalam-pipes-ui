
// ===== TESTIMONIAL SLIDER =====
// Get slider container and single card
const testimonialSlider = document.getElementById("testimonialSlider");
const testimonialCard = document.querySelector(".testimonial_card");


// INITIAL POSITION
window.addEventListener("load", () => {
  testimonialSlider.scrollLeft = testimonialCard.offsetWidth / 2;
});


// SCROLL WITH MOUSE WHEEL (horizontal scroll behavior)
testimonialSlider.addEventListener("wheel", (e) => {
  e.preventDefault();

  testimonialSlider.scrollBy({
    left: e.deltaY,
    behavior: "smooth"
  });

}, { passive: false });





