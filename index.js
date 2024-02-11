const sketchContainer = document.querySelector(".sketchContainer");
const colorContainer = document.querySelector(".colorContainer");

function createGrid() {
    for (let i = 1; i <= 256; i++) {
        sketchContainer.innerHTML += `<div class="sketchBox">${i}</div>`
    }
}

createGrid();