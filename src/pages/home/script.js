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