// JavaScript Document
console.log("hi");

let deButton = document.querySelector("nav button");
let deUl = document.querySelector("nav");

deButton.onclick = toggleMenu;


function toggleMenu(){
  deUl.classList.toggle("toonMenu");
}

// const tweedeDiv = document.querySelector('section:nth-of-type(7) > div');

// let isDragStart = false, prevPageX, prevScrollLeft;

// const dragStart = (e) => {
//   isDragStart = true;
//   prevPageX = e.pageX;
//   prevScrollLeft = tweedeDiv.scrollLeft;

// }

// const dragging = (e) => {
//   if(!isDragStart) return;
//   e.preventDefault();
//   let positionDiff = e.pageX - prevPageX;
//   tweedeDiv.scrollLeft = prevScrollLeft - positionDiff;
// }

// const dragStop = () => {
//   isDragStart = false;
// }

// tweedeDiv.addEventListener("mousedown", dragStart);
// tweedeDiv.addEventListener("mousemove", dragging);
// tweedeDiv.addEventListener("mouseup", dragStop);




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


