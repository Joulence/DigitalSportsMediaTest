export function onclick() {
  let openMenuBtn = document.getElementById("hamburger-menu");
  let closeMenuBtn = document.getElementById("close-menu");
  let navMenu = document.getElementById("nav-sidebar");

  openMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    document.querySelector("header").classList.toggle("menu-open");
  });

  closeMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    document.querySelector("header").classList.toggle("menu-open");
  });
}
