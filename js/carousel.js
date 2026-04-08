
// ===== SELECT ELEMENTS =====
// Get main image, thumbnails, and navigation buttons
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0; // Track current active image index


// ===== CLICK ON THUMBNAIL =====
// When a thumbnail is clicked → update main image
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    updateImage();
  });
});


// ===== UPDATE IMAGE =====
// Change main image + update active thumbnail
function updateImage() {
  mainImage.src = thumbnails[currentIndex].src;

  // remove active class from all thumbnails
  thumbnails.forEach(t => t.classList.remove("active"));

  // add active class to current thumbnail
  thumbnails[currentIndex].classList.add("active");
  result.style.backgroundImage = `url(${mainImage.src})`;
}


// ===== NEXT =====
// Go to next image (loop back at end)
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  updateImage();
});


// ===== PREV =====
// Go to previous image (loop to last if at start)
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateImage();
});



