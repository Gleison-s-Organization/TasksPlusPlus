let html = "";

class Header extends HTMLElement {
  connectedCallback(data) {
    this.innerHTML = html;
  }
}
const request = new XMLHttpRequest();
request.open("GET", "/src/components/header.html");
request.responseType = "text/html";
request.send();
request.onload = function () {
  const data = request.response;
  html = data;
  customElements.define("main-header", Header);
};
