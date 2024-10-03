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


// document.querySelector('section img').forEach((toggle) => {
//   toggle.addEventListener('click', function() {
//     const content = this.nextElementSibling;
//     if(content.style.display ==="none" || content.style.display === "") {
//       content.style.display === "block";
//     } else {
//       content.style.display === "none";
//     }
//   });
// });


