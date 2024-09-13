// JavaScript Document
console.log("hi");

// menu sluiten en openen
// let deButton = document.querySelector("nav button");
// let deUl = document.querySelector("nav");

// deButton.onclick = toggleMenu;

// function toggleMenu(){
//     deUl.classList.toggle("toonMenu");
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const menuButton = document.querySelector('.menu-button');
//     const nav = document.querySelector('nav');
  
//     // Menu open/close togglen
//     menuButton.addEventListener('click', () => {
//       nav.classList.toggle('toonMenu');
//     });
  
//     // Sluit button functionaliteit
//     const closeButton = nav.querySelector('button');
//     closeButton.addEventListener('click', () => {
//       nav.classList.remove('toonMenu');
//     });
//   });
// document.querySelector('.menu-button').addEventListener('click', function() {
//     document.querySelector('nav').classList.toggle('toonMenu');
//   });

//   document.querySelector('nav button').addEventListener('click', function() {
//     document.querySelector('nav').classList.remove('toonMenu');
//   });

/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
let deButton = document.querySelector("nav button");
let deUl = document.querySelector("nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deButton.onclick = toggleMenu;


// stap 3: voeg in de functie een class toe aan de nav

function toggleMenu(){
  deUl.classList.toggle("toonMenu");
}