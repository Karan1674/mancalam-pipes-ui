

// ===== MODAL FUNCTIONALITY =====

// OPEN MODAL (trigger via buttons)
const openBtns = document.querySelectorAll(".open_modal_btn");

openBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const modalId = btn.getAttribute("data-modal");
    const modal = document.getElementById(modalId);

    modal.classList.add("active");
    document.body.classList.add("no-scroll");
  });
});


// HANDLE ALL MODALS (close button, outside click, form prevent)
const modals = document.querySelectorAll(".modal_overlay");

modals.forEach(modal => {

  const closeBtn = modal.querySelector(".modal_close");

  // CLOSE BUTTON
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  // OUTSIDE CLICK
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });

  // FORM SUBMIT PREVENT
  const form = modal.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

});


// DOWNLOAD MODAL EMAIL LOGIC (enable/disable button)
const downloadModal = document.getElementById("download");

const emailInput = downloadModal.querySelector("input[type='email']");
const submitBtn = downloadModal.querySelector(".modal_btn .btn");

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim() !== "") {
    submitBtn.classList.remove("disabled");
  } else {
    submitBtn.classList.add("disabled");
  }
});