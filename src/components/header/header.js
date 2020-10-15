class Header extends HTMLElement {
  async connectedCallback() {
    const self = this;
    // this.attachShadow({ mode: "open" });

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

    // this.shadowRoot.innerHTML = await responseHTML.text();
    // this.shadowRoot.appendChild(style);
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

const openUserInfo = () => {
  const $userInfo = document.querySelector(".js-user-info");
  $userInfo.classList.toggle("visible");
};
