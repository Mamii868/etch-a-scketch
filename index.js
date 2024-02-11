const sketchContainer = document.querySelector(".sketchContainer");
const colorContainer = document.querySelector(".colorContainer");
const eraseBtn = document.querySelector('.eraseBtn');
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
const sketchBox = document.querySelectorAll(".sketchBox");

// Captures where mouse hovers
sketchBox.forEach((box) =>
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = currentColor;
  })
);
// Creates color selection
function colorGrid() {
  colors.forEach((color) => {
    colorContainer.innerHTML += `<div class="colorBox" value="${color}" style="background-color:${color}"></div>`;
  });
  
//Erase Screen
eraseBtn.addEventListener("click", () => {
    sketchBox.forEach(box => {
        box.style.backgroundColor = 'white';
    })
    console.log('clicked')
})
}
colorGrid();

// Sets the chosen color
const colorBox = document.querySelectorAll(".colorBox");
colorBox.forEach((box) =>
  box.addEventListener("click", () => {
    currentColor = box.getAttribute("value");
    console.log(currentColor);
  })
);

