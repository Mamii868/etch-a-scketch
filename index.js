const sketchContainer = document.querySelector(".sketchContainer");
const colorContainer = document.querySelector(".colorContainer");
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'black']
let currentColor;
const background = `style="background-color:${currentColor};"`
// creates flex boxes
function createGrid() {
    for (let i = 1; i <= 256; i++) {
        sketchContainer.innerHTML += `<div class="sketchBox"></div>`
    }
}
createGrid();
const sketchBox = document.querySelectorAll(".sketchBox");

//captures where mouse hovers
sketchBox.forEach(box => box.addEventListener('mouseover', () => {
    // box.classList.add('blue')
}))

function colorGrid() {
    colors.forEach(color => {
        colorContainer.innerHTML += `<div class="colorBox" style="background-color:${color}"></div>`
    })
}
colorGrid()