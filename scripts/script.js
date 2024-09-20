// JavaScript Document
console.log("hi");

let ButtonMenu = document.querySelector("nav button");
let Menu = document.querySelector("nav");

ButtonMenu.onclick = toggleMenu;


function toggleMenu(){
  Menu.classList.toggle("toonMenu");
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






