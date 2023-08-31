// Get the elements
const burgerMenu = document.querySelector(".burger");
const navLinks = document.querySelector(".nav_links");

// Toggle the navigation menu
burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
