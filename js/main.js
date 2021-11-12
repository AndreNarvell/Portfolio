var head = document.getElementsByTagName('head')[0];
var js = document.createElement("script");

js.type = "text/javascript";

if (navigator.userAgent.match(/Android|iPhone|Blackberry/i)) 
{
    js.src = "js/mobile.js";
}
else
{
    js.src = "js/desktop.js";
}

head.appendChild(js);



// // Kod för menyn som öppnas och stängs. Lägger till och tar bort klassen menuExpanded och menuCollapsed.
// const menuCollapsed = document.querySelector(".menuCollapsed")
// menuCollapsed.addEventListener("click", () => menuCollapsed.classList.toggle("menuExpanded"));

// // Kod för submit-knappen som gör att man skickas vidare och inte åker längst upp på sidan.
// const submitBtn = document.querySelector("#submit");
// submitBtn.addEventListener("click", function(event){
//   event.preventDefault()
// });















// console.log(innerWidth);

// if (window.innerWidth < 567) {   
//   margin:"10em";
  

// }

// window.addEventListener("resize",()=> {
  // if (window.innerWidth < 567) {   
  //     var prevScrollpos = window.pageYOffset;
  //   window.onscroll = function() {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("navbar").style.top = "20px";
  //     } else {
  //       document.getElementById("navbar").style.top = "-50px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }


  // }

