
// ===== PROCESS TABS =====
// Elements
const tabs = document.querySelectorAll(".tab");
const processPrevBtn = document.querySelector(".prev_btn");
const processNextBtn = document.querySelector(".next_btn");

let processCurrentIndex = 0;


// TAB CLICK (desktop interaction)
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    setActive(index);
  });
});


// Set active tab
function setActive(index) {
  tabs.forEach(t => t.classList.remove("active"));
  tabs[index].classList.add("active");
  processCurrentIndex = index;
}


// MOBILE NAVIGATION (prev / next buttons)
processNextBtn.addEventListener("click", () => {
  if (processCurrentIndex < tabs.length - 1) {
    processCurrentIndex++;
    setActive(processCurrentIndex);
  }
});

processPrevBtn.addEventListener("click", () => {
  if (processCurrentIndex > 0) {
    processCurrentIndex--;
    setActive(processCurrentIndex);
  }
});





