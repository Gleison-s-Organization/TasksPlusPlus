document.addEventListener("DOMContentLoaded", () => {
  const elements = [
    ...document.getElementsByClassName("input-container__input"),
  ];

  elements.forEach((element) => {
    element.addEventListener("blur", function () {
      const validators = [
        {
          expect: () => this.value == "",
          action: () => this.classList.remove("has-content"),
        },
        {
          expect: () => this.value != "",
          action: () => this.classList.add("has-content"),
        },
      ];
      validators.find((validator) => validator.expect()).action();
    });
  });
});
