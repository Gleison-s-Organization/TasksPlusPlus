document.addEventListener("DOMContentLoaded", () => {
  const user = {
    name: "Tony Stark",
    avatar:
      "https://pickaface.net/gallery/avatar/23556424_171128_2020_uqewt.png",
    email: "iron-man@marvel.com",
    password: "123456",
  };

  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");
  const formLogin = document.getElementById("formLogin");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
    signUpButton.disabled = true;
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
    signUpButton.disabled = false;
  });

  const body = document.querySelector("body");
  body.style.opacity = 1;

  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(document.querySelector("#formLogin"));
    const formDataEntryValues = [...[...formData].map((c) => c[1])];
    const [email, password] = formDataEntryValues;

    // const validations = [user.email === email, user.password === password];
    const validations = [true];
    const isLoginValid = +validations.every((validation) => validation);
    const loginMessages = [
      () => {
        const toastElement = document.querySelector(".js-toast-red");
        container.classList.add("shake");
        toastElement.classList.add("show");
        setTimeout(() => {
          toastElement.classList.remove("show");
        }, 2200);
        setTimeout(() => {
          container.classList.remove("shake");
        }, 300);
      },
      () => {
        const userInfo = document.querySelector(".c.user-info");
        const toastElement = document.querySelector(".js-toast-green");
        toastElement.classList.add("show");
        setTimeout(() => {
          toastElement.classList.remove("show");
        }, 3000);
        // formPopUp.classList.toggle("visible");
        // formPopUp.classList.remove("not-logged");
        // userInfo.classList.remove("not-logged");
        // userProfileIcon.src = "../../assets/icons/logged-in.svg";
        window.location.href = "../home/home.html";
      },
    ];
    const message = loginMessages[isLoginValid];
    message();
  }
  formLogin.addEventListener("submit", handleForm);
});
