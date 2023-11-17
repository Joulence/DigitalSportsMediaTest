export function chooseDay() {
  const forecastDays = document.querySelector(".forecasts__inner-forecast")
    .children[1];

  const matchDays = document.querySelector(".match-buttons");

  matchDays.addEventListener("click", (event) => {
    if (
      event.target.tagName === "BUTTON" &&
      !event.target.classList.contains("match-calendar")
    ) {
      if (!event.target.classList.contains("selected-sport")) {
        for (let i = 0; i < matchDays.children.length; i++) {
          matchDays.children[i].classList.remove("selected-sport");
        }

        for (let i = 0; i < matchDays.children[1].children.length; i++) {
          // console.log(matchDays.children[1].children[i])
          matchDays.children[1].children[i].children[0].classList.remove(
            "selected-sport"
          );
        }
        event.target.classList.add("selected-sport");
      }
    }
  });

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
