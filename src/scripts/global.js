const logout = () => {
  const $buttonLogout = document.getElementById("buttonLogout");
  if ($buttonLogout != null) {
    $buttonLogout.addEventListener("click", () => {
      window.location.href = "../login-cadastro/login-cadastro.html";
    });
  }
};

const applyFadeOpacity = () => {
  const body = document.querySelector("body");
  body.style.opacity = 1;
};

const openUserInfo = () => {
  const elements = document.querySelectorAll(".c.user-info");
  elements.forEach((element) => {
    element.classList.toggle("visible");
  });
};

window.addEventListener("load", () => {
  logout();
  applyFadeOpacity();
});
