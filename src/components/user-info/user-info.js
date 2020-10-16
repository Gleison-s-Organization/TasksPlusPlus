class UserInfo extends HTMLElement {
  async connectedCallback() {
    const self = this;

    const responseHTML = await fetch("/src/components/user-info/user-info.html");
    const responseCSS = await fetch("/src/components/user-info/user-info.css");

    const textCSS = await responseCSS.text();
    const textHTML = await responseCSS.html();

    const style = document.createElement("style");
    style.textContent = textCSS;

    self.innerHTML = `<style>${style.innerHTML}</style> ${textHTML}`;
    self.classList.heig;
  }
}
window.customElements.define("user-info", UserInfo);
