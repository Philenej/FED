// JavaScript Document
console.log("hi");

let deButton = document.querySelector("nav button");
let deUl = document.querySelector("nav");

deButton.onclick = toggleMenu;


function toggleMenu(){
  deUl.classList.toggle("toonMenu");
}


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


