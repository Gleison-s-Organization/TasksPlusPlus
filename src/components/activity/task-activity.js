class TaskActivity extends HTMLElement {
  async connectedCallback() {
    const self = this;

    const subject = self.getAttribute("subject");
    const content = self.getAttribute("content");
    const description = self.getAttribute("description");
    const hour = self.getAttribute("hour");
    const time = self.getAttribute("time");

    window.addEventListener("load", () => {
      self.querySelector(".js-subject").textContent = subject;
      self.querySelector(".js-content").textContent = content;
      self.querySelector(".js-description").textContent = description;
      self.querySelector(".js-hour").textContent = hour;
      self.querySelector(".js-time").textContent = time;
    });

    const responseHTML = await fetch("/src/components/activity/activity.html");
    const responseCSS = await fetch("/src/components/activity/activity.css");

    const textHTML = await responseHTML.text();
    const textCSS = await responseCSS.text();

    const style = document.createElement("style");
    style.textContent = textCSS;

    self.innerHTML = `
    <style>${style.innerHTML}</style>
    ${textHTML}`;
  }
}
customElements.define("task-activity", TaskActivity);
