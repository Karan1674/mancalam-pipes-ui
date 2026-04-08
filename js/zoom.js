// ===== ZOOM FUNCTIONALITY =====

// Get main image and wrapper container
const img = document.getElementById("mainImage");
const wrapper = document.querySelector(".hero_image_wrapper");

// create zoom lens element (small movable box)
const lens = document.createElement("div");
lens.className = "zoom_lens";

// create zoom result box (magnified preview)
window.result = document.createElement("div");
result.className = "zoom_result";

// add both elements inside wrapper
wrapper.appendChild(lens);
wrapper.appendChild(result);

let cx, cy; // zoom scale factors


// ===== SHOW ZOOM =====
// Show lens and zoom result when mouse enters
wrapper.addEventListener("mouseenter", () => {
  lens.style.display = "flex";
  result.style.display = "block";

  // set background image for zoom preview
  result.style.backgroundImage = `url(${img.src})`;

  // calculate zoom ratio based on sizes
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;

  // set background size for zoom effect
  result.style.backgroundSize =
    `${img.width * cx}px ${img.height * cy}px`;
});


// ===== HIDE ZOOM =====
// Hide lens and zoom preview when mouse leaves
wrapper.addEventListener("mouseleave", () => {
  lens.style.display = "none";
  result.style.display = "none";
});


// ===== MOVE LENS =====
// Move lens with mouse and update zoom position
wrapper.addEventListener("mousemove", moveLens);

function moveLens(e) {
  const rect = wrapper.getBoundingClientRect();

  // get cursor position relative to image
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  const lensW = lens.offsetWidth / 2;
  const lensH = lens.offsetHeight / 2;

  // keep lens inside image boundaries
  x = Math.max(lensW, Math.min(x, rect.width - lensW));
  y = Math.max(lensH, Math.min(y, rect.height - lensH));

  // position lens
  lens.style.left = (x - lensW) + "px";
  lens.style.top = (y - lensH) + "px";

  // update zoomed background position
  result.style.backgroundPosition =
    `-${(x * cx - result.offsetWidth / 2)}px -${(y * cy - result.offsetHeight / 2)}px`;
}




