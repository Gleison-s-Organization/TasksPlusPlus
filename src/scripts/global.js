const logout = () => {
  const $buttonLogout = document.querySelectorAll(".js-button-logout");
  $buttonLogout.forEach(($button) => {
    $button?.addEventListener("click", () => {
      window.location.href = "../login-cadastro/login-cadastro.html";
    });
  });
};

const navigateToEditPage = () => {
  const $buttonEdit = document.querySelector(".js-button-edit");
  $buttonEdit?.addEventListener("click", () => {
    window.location.href = "../perfil-usuario/perfil-usuario.html";
  });
};

const applyFadeOpacity = () => {
  const $body = document.querySelector("body");
  $body.style.opacity = 1;
};

const openUserInfo = () => {
  const $userInfo = document.querySelector(".js-user-info");
  $userInfo?.classList.toggle("visible");
};

window.addEventListener("load", () => {
  logout();
  applyFadeOpacity();
  navigateToEditPage();
});
