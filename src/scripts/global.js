const logout = () => {
  const $buttonLogout = document.getElementById("buttonLogout");
  $buttonLogout?.addEventListener("click", () => {
    window.location.href = "../login-cadastro/login-cadastro.html";
  });
};

const applyFadeOpacity = () => {
  const $body = document.querySelector("body");
  $body.style.opacity = 1;
};

const openUserInfo = () => {
  const $userInfo = document.querySelector(".c-user-info");
  $userInfo?.classList.toggle("visible");
};

const openSideNav = () => {
  const $menuButton = document.querySelector(".js-menu-button");
  const $closeButton = document.querySelector(".js-close-button");
  const $sideNav = document.querySelector(".js-side-nav");
  console.log($menuButton);
  console.log($closeButton);
  console.log($sideNav);
  $menuButton?.addEventListener("click", () => ($sideNav.style.transform = "translateX(0%)"));
  $closeButton?.addEventListener("click", () => ($sideNav.style.transform = "translateX(100%)"));
};

window.addEventListener("load", () => {
  logout();
  applyFadeOpacity();
  openSideNav();
});
