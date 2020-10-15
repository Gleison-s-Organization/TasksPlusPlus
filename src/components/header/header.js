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
  }
}
customElements.define("main-header", Header);
