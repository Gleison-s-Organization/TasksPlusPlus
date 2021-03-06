window.addEventListener("load", () => {
  const user = {
    name: "Tony Stark",
    avatar: "https://pickaface.net/gallery/avatar/23556424_171128_2020_uqewt.png",
    email: "iron-man@marvel.com",
    password: "123456",
  };

  // function handleForm(event) {
  //   event.preventDefault();
  //   const formData = new FormData(document.querySelector("#formLogin"));
  //   const formDataEntryValues = [...[...formData].map((c) => c[1])];
  //   const [email, password] = formDataEntryValues;
  //   window.location.href = "../home/home.html";

  //   // const validations = [user.email === email, user.password === password];
  //   const validations = [true];
  //   const isLoginValid = +validations.every((validation) => validation);
  // }
  // formLogin.addEventListener("submit", handleForm);

  /* ========================================================================== */
  /* Sign Up Form */
  /* ========================================================================== */

  const $signUpForm = document.querySelector(".js-sign-up-form");
  const $signUpButton = $signUpForm.querySelector(".form-container__button");
  const [$userName, $email, $password, $passwordCheck] = $signUpForm;

  const $inputs = [...$signUpForm.querySelectorAll(".input-container__input")];
  $inputs.forEach(($input) =>
    $input.addEventListener("keyup", () => {
      const stateForm = isFormValid($inputs);
      $signUpButton.disabled = !stateForm;
    })
  );

  $userName.addEventListener("input", () => {
    const expectations = [
      {
        expect: () => $userName.value && $userName.value.length < 6,
        action: () => setInvalidFor($userName, "mínimo de 6 caracteres"),
      },
      {
        expect: () => $userName.value.length == "",
        action: () => setUncheckedFor($userName),
      },
      {
        expect: () => true,
        action: () => setValidFor($userName),
      },
    ];

    const expected = expectations.find((expectation) => expectation.expect());
    expected.action();
  });

  $email.addEventListener("input", () => {
    const expectations = [
      {
        expect: () => $email.value && !isEmail($email.value),
        action: () => setInvalidFor($email, "email inválido"),
      },
      {
        expect: () => $email.value.length == "",
        action: () => setUncheckedFor($email),
      },
      {
        expect: () => true,
        action: () => setValidFor($email),
      },
    ];

    const expected = expectations.find((expectation) => expectation.expect());
    expected.action();
  });

  $password.addEventListener("input", () => {
    const expectations = [
      {
        expect: () => $password.value && $password.value.length < 8,
        action: () => setInvalidFor($password, "mínimo de 8 caracteres"),
      },
      {
        expect: () => $password.value && !hasUpperCaseCharacter($password.value),
        action: () => setInvalidFor($password, "é necessário pelo menos 1 letra maiúscula"),
      },
      {
        expect: () => $password.value && !hasLowerCaseCharacter($password.value),
        action: () => setInvalidFor($password, "é necessário pelo menos 1 letra minúscula"),
      },
      {
        expect: () => $password.value && !hasSpecialCharacter($password.value),
        action: () => setInvalidFor($password, "é necessário pelo menos 1 carácter especial"),
      },
      {
        expect: () => $password.value.length == "",
        action: () => setUncheckedFor($password),
      },
      {
        expect: () => true,
        action: () => setValidFor($password),
      },
    ];

    const expected = expectations.find((expectation) => expectation.expect());
    expected.action();
  });

  $passwordCheck.addEventListener("input", () => {
    const expectations = [
      {
        expect: () => $passwordCheck.value && $passwordCheck.value !== $password.value,
        action: () => setInvalidFor($passwordCheck, "as senhas estão diferentes"),
      },
      {
        expect: () => $passwordCheck.value.length == "",
        action: () => setUncheckedFor($passwordCheck),
      },
      {
        expect: () => true,
        action: () => setValidFor($passwordCheck),
      },
    ];

    const expected = expectations.find((expectation) => expectation.expect());
    expected.action();
  });

  // function isFormValid($elements) {
  //   const stateForm = $elements.every(($element) => $element.getAttribute("is-valid") === "true");
  //   $signUpButton.disabled = !stateForm;
  // }

  /* ========================================================================== */
  /* End-Sign Up Form */
  /* ========================================================================== */

  /* ========================================================================== */
  /* Sign In Form */
  /* ========================================================================== */

  const $signInForm = document.querySelector(".js-sign-in-form");
  const $signInButton = document.querySelector("#formLogin .form-container__button");
  const [$emailSignIn, $passwordSignIn] = $signInForm;
  const $signInInputs = [$emailSignIn, $passwordSignIn];

  $emailSignIn.value = "userteste@teste.com";
  $passwordSignIn.value = "12345678aA@";

  $signInInputs.forEach(($input) =>
    $input.addEventListener("keyup", () => {
      const stateForm = isFormValid($signInInputs);
      console.log("Sing");
      $signInButton.disabled = !stateForm;
    })
  );

  $emailSignIn.addEventListener("keyup", () => {
    const expectations = [
      {
        expect: () => $emailSignIn.value && !isEmail($emailSignIn.value),
        action: () => setInvalidFor($emailSignIn, "email inválido"),
      },
      {
        expect: () => $emailSignIn.value.length == "",
        action: () => setUncheckedFor($emailSignIn),
      },
      {
        expect: () => true,
        action: () => setValidFor($emailSignIn),
      },
    ];

    const expected = expectations.find((expectation) => expectation.expect());
    expected.action();
  });

  $passwordSignIn.addEventListener("keyup", () => {
    const expectations = [
      {
        expect: () => $passwordSignIn.value && $passwordSignIn.value.length < 8,
        action: () => setInvalidFor($passwordSignIn, "mínimo de 8 caracteres"),
      },
      {
        expect: () => $passwordSignIn.value && !hasUpperCaseCharacter($passwordSignIn.value),
        action: () => setInvalidFor($passwordSignIn, "é necessário pelo menos 1 letra maiúscula"),
      },
      {
        expect: () => $passwordSignIn.value && !hasLowerCaseCharacter($passwordSignIn.value),
        action: () => setInvalidFor($passwordSignIn, "é necessário pelo menos 1 letra minúscula"),
      },
      {
        expect: () => $passwordSignIn.value && !hasSpecialCharacter($passwordSignIn.value),
        action: () => setInvalidFor($passwordSignIn, "é necessário pelo menos 1 carácter especial"),
      },
      {
        expect: () => $passwordSignIn.value.length == "",
        action: () => setUncheckedFor($passwordSignIn),
      },
      {
        expect: () => true,
        action: () => setValidFor($passwordSignIn),
      },
    ];

    const expected = expectations.find((expectation) => expectation.expect());
    expected.action();
  });

  /* ========================================================================== */
  /* End-Sign In Form */
  /* ========================================================================== */

  /* ========================================================================== */
  /* Helper Validations Functions */
  /* ========================================================================== */

  function setInvalidFor($element, message) {
    const $inputContainer = $element.parentElement;
    $inputContainer.setAttribute("data-tip", message);
    console.log("teste");
    $inputContainer.classList.add("invalid");
    $inputContainer.classList.remove("valid");
    $element.removeAttribute("is-valid");
  }

  function setValidFor($element) {
    const $inputContainer = $element.parentElement;
    $inputContainer.classList.add("valid");
    $inputContainer.classList.remove("invalid");
    $element.setAttribute("is-valid", "true");
  }

  function setUncheckedFor($element) {
    const $inputContainer = $element.parentElement;
    $inputContainer.classList.remove("valid");
    $inputContainer.classList.remove("invalid");
    $element.removeAttribute("is-valid");
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  function hasUpperCaseCharacter(value) {
    return /[A-Z]/g.test(value);
  }

  function hasLowerCaseCharacter(value) {
    return /[a-z]/g.test(value);
  }

  function hasSpecialCharacter(value) {
    return /[`´!¨@#$%^&*ª°º§()_+\-=\[\]{};':"\\|,.<>\/?~]/g.test(value);
  }

  function isFormValid($elements) {
    return $elements.every(($element) => $element.getAttribute("is-valid") === "true");
  }

  /* ========================================================================== */
  /* End-Helper Validations Functions */
  /* ========================================================================== */
});
