class UserInfo extends HTMLElement {
  async connectedCallback() {
    const self = this;

    const responseHTML = await fetch("/src/components/user-info/user-info.html");
    const responseCSS = await fetch("/src/components/user-info/user-info.css");

    const textCSS = await responseCSS.text();
    const textHTML = await responseHTML.text();

    const style = document.createElement("style");
    style.textContent = textCSS;

    self.innerHTML = `<style>${style.innerHTML}</style> ${textHTML}`;

    const $buttonLogout = self.querySelector(".js-button-logout");
    const $buttonEdit = self.querySelector(".js-button-edit");
    $buttonLogout?.addEventListener("click", () => {
      window.location.href = "../login-cadastro/login-cadastro.html";
    });
    $buttonEdit?.addEventListener("click", () => {
      window.location.href = "../perfil-usuario/perfil-usuario.html";
    });
  }
}
window.customElements.define("user-info", UserInfo);
