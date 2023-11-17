export function onclick() {
  let openMenuBtn = document.getElementById("hamburger-menu");
  let closeMenuBtn = document.getElementById("close-menu");
  let navMenu = document.getElementById("nav-sidebar");

  const addSideBar = () => {
    navMenu.classList.toggle("show");
    document.querySelector("header").classList.toggle("menu-open");
    document.querySelector("main").classList.toggle("menu-open");
    document.body.classList.add("overflow-hidden");
  };

  const removeSideBar = () => {
    navMenu.classList.toggle("show");
    document.querySelector("header").classList.toggle("menu-open");
    document.querySelector("main").classList.toggle("menu-open");
    document.body.classList.remove("overflow-hidden");
  };

  openMenuBtn.addEventListener("click", () => addSideBar());

  closeMenuBtn.addEventListener("click", () => removeSideBar());

  document.body.addEventListener("click", (event) => {
    if (navMenu.classList.contains("show")) {
      if (
        event.target.tagName === "HEADER" ||
        event.target.tagName === "MAIN"
      ) {
        removeSideBar();
      }
    }
  });
}
