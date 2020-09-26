let isOpenLoginForm = false;

const userLoginPopUp = document.getElementById("formPopup");
const buttonLogout = document.getElementById("buttonLogout");

function openLoginForm() {
  const elements = document.querySelectorAll(".user-info, .formPopup");
  elements.forEach((c, i) => {
    debugger;
    if (
      i === 1 &&
      c.classList.contains("user-info") &&
      c.classList.contains("not-logged")
    )
      return;
    c.classList.toggle("visible");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", () => {
    window.location.href = "../login-cadastro/login-cadastro.html";
  });
  const body = document.querySelector("body");
  body.append();
  body.style.opacity = 1;
  const formPopUp = document.querySelector(".formPopup");
  const formLogin = document.querySelector("form.formPopupContainer");
  const userProfileIcon = document.querySelector(".user-profile-icon > img");
  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(
      document.querySelector("form.formPopupContainer")
    );
    const datas = [...[...formData].map((c) => c[1])];
    const [email, password] = datas;

    const validations = [user.email === email, user.password === password];
    const isLoginValid = +validations.every((validation) => validation);
    const loginMessages = [
      () => {
        const toastElement = document.querySelector(".toast.toast--red");
        formPopUp.classList.add("shake");
        toastElement.classList.add("show");
        setTimeout(() => {
          toastElement.classList.remove("show");
        }, 2200);
        setTimeout(() => {
          formPopUp.classList.remove("shake");
        }, 300);
      },
      () => {
        const userInfo = document.querySelector(".user-info");
        const toastElement = document.querySelector(".toast.toast--green");
        toastElement.classList.add("show");
        setTimeout(() => {
          toastElement.classList.remove("show");
        }, 3000);
        formPopUp.classList.toggle("visible");
        formPopUp.classList.remove("not-logged");
        userInfo.classList.remove("not-logged");
        userProfileIcon.src = "../../assets/icons/logged-in.svg";
      },
    ];
    const message = loginMessages[isLoginValid];
    message();
  }
  formLogin.addEventListener("submit", handleForm);
});
