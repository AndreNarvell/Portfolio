// Kod för menyn som öppnas och stängs. Lägger till och tar bort klassen menuExpanded och menuCollapsed.
const menuCollapsed = document.querySelector(".menuCollapsed")
menuCollapsed.addEventListener("click", () => menuCollapsed.classList.toggle("menuExpanded"));

// Kod för submit-knappen som gör att man skickas vidare och inte åker längst upp på sidan.
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function(event){
  event.preventDefault()
});
