document.addEventListener("DOMContentLoaded", () => { 

  // adiciona a classe hasItemSelected
  // const elements = [...document.querySelectorAll(".select-wrapper")];

  // elements.forEach((element) => {
  //   const select = element.querySelector("select");
  //   select.addEventListener("change", function (event) {
  //     if (event.target.selectedIndex !== 0) {
  //       element.classList.add("has-item-selected");
  //     } else {
  //       element.classList.remove("has-item-selected");
  //     }
  //   });
  // });
  // =============================================

  // adiciona a classe hasItemSelected
  // const calendarDays = document.querySelectorAll(".calendar td.day");
  // calendarDays.forEach((event) =>
  //   event.addEventListener("click", function () {
  //     console.log(this);
  //   })
  // );
  // =============================================


  
(function () {
  const $radios = document.querySelectorAll(".tab > input");
  const $tabs = [...document.querySelectorAll(`[data-toggle^=tab]`)];    
  let previousRadio;

  const toggleClass = ({ id }) => {
    const $tab = $tabs.find((c) => c.attributes["data-toggle"].value === id);
    $tab.classList.toggle("tab--active");
  };

  const activateTab = ($radio) => {
    [previousRadio, $radio].forEach((c) => toggleClass(c));
    previousRadio = $radio;
  };

  $radios.forEach((radio, index) => {
    index === 0 && (radio.checked = true) && (previousRadio = radio);
    radio.addEventListener("change", (event) => activateTab(event.target));
  });
})();
});

