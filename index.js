const sketchContainer = document.querySelector(".sketchContainer");
const colorContainer = document.querySelector(".colorContainer");
const eraseBtn = document.querySelector(".eraseBtn");
const editGridBtn = document.querySelector(".sizeInput");
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
  "white",
  "black",
];
let currentColor;
const background = `style="background-color:${currentColor};"`;

// Creates flex boxes
function createGrid() {
  for (let i = 1; i <= 256; i++) {
    sketchContainer.innerHTML += `<div class="sketchBox"></div>`;
  }
}
createGrid();

//Finds hovered flex item and changes color
const sketchBox = document.querySelectorAll(".sketchBox");
sketchContainer.addEventListener('mouseover', function(e) {
    if(e.target.classList.contains('sketchBox')) {
        e.target.style.backgroundColor = currentColor;
    }
   
})

// Creates color selection
function colorGrid() {
  colors.forEach((color) => {
    colorContainer.innerHTML += `<div class="colorBox" value="${color}" style="background-color:${color}"></div>`;
  });
  colorContainer.classList.add("colorContainerShrink");
  //Erase Screen
  eraseBtn.addEventListener("click", () => {
    sketchBox.forEach((box) => {
      box.style.backgroundColor = "white";
    });
  });
}
colorGrid();

// Sets the chosen color
const colorBox = document.querySelectorAll(".colorBox");
colorBox.forEach((box) =>
  box.addEventListener("click", () => {
    currentColor = box.getAttribute("value");
  })
);

editGridBtn.addEventListener("click", () => {
  let size = window.prompt("Choose size");
  console.log(typeof size)
  if (!Number.isInteger(Number(size))) {
    alert("Please input a valid number!");
  } else {
    if (size < 2 || size > 100) {
      alert("Must be between 2x2 and 100x100");
    } else {
      sketchContainer.innerHTML = ``;
      let grid = size * size
      let pixelsize = 476.8 / size;

      if (grid % 8 === 0) {
        for (let g = 0; g < 8; g++) {
            setTimeout(() => {
            for (let i = 1; i <= (grid / 8); i++) {
                sketchContainer.innerHTML += `<div class="sketchBox" style="flex-basis: ${pixelsize}px; height: ${pixelsize}px;"></div>`;
              }}, 0)
          }
      } else if (grid % 6 === 0) {
        for (let g = 0; g < 6; g++) {
            setTimeout(() => {
            for (let i = 1; i <= (grid / 6); i++) {
                sketchContainer.innerHTML += `<div class="sketchBox" style="flex-basis: ${pixelsize}px; height: ${pixelsize}px;"></div>`;
              }
              }, 0)
          }
      } else if (grid % 4 === 0) {
        for (let g = 0; g < 4; g++) {
            setTimeout(() => {
            for (let i = 1; i <= (grid / 4); i++) {
                sketchContainer.innerHTML += `<div class="sketchBox" style="flex-basis: ${pixelsize}px; height: ${pixelsize}px;"></div>`;
              }
              }, 0)
          }
      } else {
        for (let g = 0; g < 2; g++) {
            setTimeout(() => {
            for (let i = 1; i <= (grid / 2); i++) {
                sketchContainer.innerHTML += `<div class="sketchBox" style="flex-basis: ${pixelsize}px; height: ${pixelsize}px;"></div>`;
              }
              }, 0)
          }
      }     
    }
  }
});