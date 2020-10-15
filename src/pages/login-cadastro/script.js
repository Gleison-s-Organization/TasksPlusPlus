window.addEventListener("load", () => {
  const user = {
    name: "Tony Stark",
    avatar: "https://pickaface.net/gallery/avatar/23556424_171128_2020_uqewt.png",
    email: "iron-man@marvel.com",
    password: "123456",
  };

  const body = document.querySelector("body");
  body.style.opacity = 1;

  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(document.querySelector("#formLogin"));
    const formDataEntryValues = [...[...formData].map((c) => c[1])];
    const [email, password] = formDataEntryValues;
    window.location.href = "../home/home.html";

    // const validations = [user.email === email, user.password === password];
    const validations = [true];
    const isLoginValid = +validations.every((validation) => validation);
  }
  formLogin.addEventListener("submit", handleForm);
});
