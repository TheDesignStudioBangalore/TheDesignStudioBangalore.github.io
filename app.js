const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const container = document.querySelector(".services");

// 1. Auto-scroll logic
setInterval(() => {
  if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
    container.scrollTo({ left: 0, behavior: "smooth" }); // Reset to start
  } else {
    container.scrollBy({ left: 630, behavior: "smooth" }); // Scroll by one card width
  }
}, 5000); // 5-second delay

// 2. Modal Logic
const modal = document.getElementById("blogModal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");
const openBtns = document.querySelectorAll(".open-modal");

// Loop through every "Read More" button
openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1. Get the ID of the content we want
    const contentId = btn.getAttribute("data-target");
    const sourceContent = document.getElementById(contentId);

    if (sourceContent) {
      // 2. Clear old modal content and copy the new HTML
      modalBody.innerHTML = sourceContent.innerHTML;

      // 3. Open the modal
      modal.style.display = "block";
    }
  });
});

// Close modal when X is clicked
closeBtn.onclick = () => (modal.style.display = "none");

// Close modal if clicking outside the box
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
