document.addEventListener("DOMContentLoaded", () => { 

  // adiciona a classe hasItemSelected
  const elements = [...document.querySelectorAll(".select-wrapper")];

  elements.forEach((element) => {
    const select = element.querySelector("select");
    select.addEventListener("change", function (event) {
      if (event.target.selectedIndex !== 0) {
        element.classList.add("has-item-selected");
      } else {
        element.classList.remove("has-item-selected");
      }
    });
  });
  // =============================================

  // adiciona a classe hasItemSelected
  const calendarDays = document.querySelectorAll(".calendar td.day");
  calendarDays.forEach((event) =>
    event.addEventListener("click", function () {
      console.log(this);
    })
  );
  // =============================================
});
