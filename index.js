const sketchContainer = document.querySelector(".sketchContainer");
const colorContainer = document.querySelector(".colorContainer");

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
    box.classList.add('blue')
}))