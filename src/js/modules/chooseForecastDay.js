export function chooseDay() {
  const forecastDays = document.querySelector(".forecasts__inner-forecast")
    .children[1];

  forecastDays.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      if (!event.target.classList.contains("selected")) {
        for (let i = 0; i < forecastDays.children.length; i++) {
          forecastDays.children[i].classList.remove("selected");
        }
        event.target.classList.add("selected");
      }
    }
  });
}
