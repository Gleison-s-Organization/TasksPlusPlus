const isTruthy = (string) => {
  return !!string;
};

document.addEventListener("DOMContentLoaded", () => {
  const activityForm = document.getElementById("activityForm");
  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(document.querySelector(".formActivities"));
    const formDataEntryValues = [...[...formData].map((c) => c[1])];
    const [
      activity,
      subActivity,
      startDate,
      startTime,
      hour,
      minute,
      second,
      description,
    ] = formDataEntryValues;

    console.log(
      activity,
      subActivity,
      startDate,
      startTime,
      hour,
      minute,
      second,
      description
    );

    const isFormValid = +formDataEntryValues.every((value) => isTruthy(value));
    const loginMessages = [
      () => {
        const toastElement = document.querySelector(".toast.toast--red");
        toastElement.classList.add("show");
        setTimeout(() => {
          toastElement.classList.remove("show");
        }, 3000);
      },
      () => {
        const toastElement = document.querySelector(".toast.toast--green");
        toastElement.classList.add("show");
        setTimeout(() => {
          toastElement.classList.remove("show");
        }, 3000);
        formPopUp.classList.toggle("visible");
        userProfileIcon.src = "../../assets/icons/logged-in.svg";
      },
    ];
    const message = loginMessages[isFormValid];
    message();
  }
  activityForm.addEventListener("submit", handleForm);
});
