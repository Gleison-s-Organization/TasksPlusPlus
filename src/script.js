function removeClassSelected() {
  const $menuItens = document.querySelectorAll(".c-menu-link")
  $menuItens.forEach($menuItem => {
  $menuItem.classList.remove("c-menu-link--selected") 
  
})
}



function loadPage(url,$menuItem) {
    removeClassSelected()
    $menuItem?.classList.add("c-menu-link--selected")
    var request = new XMLHttpRequest();
    const urlSplit = url.split('/');
    const urlScript = urlSplit.filter((_,index) => index < (urlSplit.length - 1)).join('/')+'/script.js';        
    const urlCss = urlSplit.filter((_,index) => index < (urlSplit.length - 1)).join('/')+'/styles.css';


    request.open("GET", url, true);
    // request.responseType = "text/html";
    request.onload = function (e) {
      var data = request.response;
                   
      const script = document.createElement('script');
      script.src = urlScript;


      const style =document.createElement("link")
      style.setAttribute("rel", "stylesheet")
      style.setAttribute("type", "text/css")
      style.setAttribute("href", urlCss)
      style.onload = function() {
        document.querySelector("#content").innerHTML = data; 
        document.querySelector('#script').innerHTML = "";
        document.querySelector('#script').appendChild(script);    
      };
      document.querySelector('#style').innerHTML = "";
      document.querySelector('#style').appendChild(style);      
      // const route = $menuItem.attributes["data-route"].value;      
      // history.pushState("", "", route);
    };
    request.send();        
  }   
  
  window.addEventListener("load", () => {
    const $homeLink = document.querySelector("#homeLink")
    loadPage("pages/home/_home.html", $homeLink)
  });  




  // setTimeout(() => {
  //   const $homeLink = document.querySelector("#homeLink")
  //   loadPage("pages/home/_home.html", $homeLink)
  // }, 500);
  // history.pushState("", "", "/home");