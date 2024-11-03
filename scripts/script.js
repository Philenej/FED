// JavaScript Document
console.log("hi");

let ButtonMenu = document.querySelector("nav button:first-of-type");
let Menu = document.querySelector("nav");

ButtonMenu.onclick = toggleMenu;


function toggleMenu(){
  Menu.classList.toggle("toonMenu");
}




document.addEventListener("DOMContentLoaded", function() {
  //  alle knoppen die een dropdown effect moeten hebben
  document.querySelectorAll('section > h2 > button').forEach(function(button) {
    button.addEventListener("click", function() {

      const details = button.closest('section').querySelector('p'); 
      

      if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Toon de details
        button.querySelector('span').textContent = "-"; // Verander naar -
      } else {
        details.style.display = "none"; 
        button.querySelector('span').textContent = "+"; // Verander naar +
      }
    });
  });
});

