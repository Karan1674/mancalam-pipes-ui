
// ===== FAQ ACCORDION =====

// Toggle FAQ items (only one open at a time)
document.querySelectorAll(".faq_item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".faq_item").forEach(i => {
      if (i !== item) i.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});