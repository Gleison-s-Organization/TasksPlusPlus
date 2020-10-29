class Header extends HTMLElement {
  async connectedCallback() {
    const self = this;

    const selectedMenuID = this.getAttribute("selected");

    const responseHTML = await fetch("/src/components/header/header.html");
    const responseCSS = await fetch("/src/components/header/header.css");

    const componentCSS = await responseCSS.text();

    const style = document.createElement("style");
    style.textContent = `
    #${selectedMenuID}{color: var(--color-inactive-background);}
    ${componentCSS}
    `;
    self.innerHTML = await responseHTML.text();
    self.appendChild(style);

    const $html = document.querySelector("html");
    let theme = localStorage.getItem("theme");

    const $toggle = document.querySelector(".c-toggle__input");
    const toggleState = theme === "dark-mode" ? true : false;

    $toggle.checked = toggleState;
    $html.className = theme;

    $toggle.addEventListener("change", () => {
      theme = theme === "dark-mode" ? "" : "dark-mode";
      $html.className = theme;
      localStorage.setItem("theme", theme);
    });
  }
}

window.customElements.define("main-header", Header);

function openSideNav() {
  const $sideNav = document.querySelector(".js-side-nav");
  $sideNav.style.transform = "translateX(0%)";
}
function closeSideNav() {
  const $sideNav = document.querySelector(".js-side-nav");
  $sideNav.style.transform = "translateX(100%)";
}

const openUserInfo = ($element) => {
  const $actualUserInfo = $element.nextElementSibling;
  const $userInfo = $actualUserInfo.querySelector(".js-user-info");
  $userInfo.classList.toggle("visible");
};
