// JavaScript Document
console.log("hi");

let ButtonMenu = document.querySelector("nav button");
let Menu = document.querySelector("nav");

ButtonMenu.onclick = toggleMenu;


function toggleMenu(){
  Menu.classList.toggle("toonMenu");
}


document.addEventListener("DOMContentLoaded", function() {
  //  alle knoppen die een dropdown effect moeten hebben
  document.querySelectorAll('section > h2 > button').forEach(function(button) {
    button.addEventListener("click", function() {
      // Zoek het paragraaf element binnen dezelfde section als de knop
      const details = button.closest('section').querySelector('p'); 
      
      // Wissel de zichtbaarheid van het paragraaf element
      if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Toon de details
        button.querySelector('span').textContent = "-"; // Verander het symbool naar "-"
      } else {
        details.style.display = "none"; // Verberg de details
        button.querySelector('span').textContent = "+"; // Verander het symbool naar "+"
      }
    });
  });
});

