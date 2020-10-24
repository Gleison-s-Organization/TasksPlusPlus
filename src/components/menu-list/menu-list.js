class MenuList extends HTMLElement {
  async connectedCallback() {
    const self = this;

    const responseHTML = await fetch("/src/components/menu-list/menu-list.html");
    const responseCSS = await fetch("/src/components/menu-list/menu-list.css");

    const componentCSS = await responseCSS.text();
    const innerHTML = await responseHTML.text();

    const style = document.createElement("style");
    style.textContent = componentCSS;

    self.innerHTML = `
    <style>${style.innerHTML}</style>
    ${innerHTML}
    `;
  }
}
customElements.define("menu-list", MenuList);
