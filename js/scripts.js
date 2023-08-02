const gridContainer = document.querySelector(".grid-container");

//Create prompt
let gridSizePrompt = +prompt("How many squares per side should the canvas have? (Minimum 2, Maximum 50)", 2);
console.log(gridSizePrompt);
while(!gridSizePrompt || gridSizePrompt < 2 || gridSizePrompt > 50) {
  gridSizePrompt = +prompt("Invalid size! How many squares per side should the canvas have? (Minimum 2, Maximum 50)", 2);
  console.log(gridSizePrompt);
}

//Create the grid
const gridRow = document.createElement("div");
gridRow.classList.add("grid-row");

const gridCellCreation = document.createElement("div");
gridCellCreation.classList.add("grid-cell");
gridCellCreation.style.height = `${700 / gridSizePrompt}px`;
gridCellCreation.style.boxSizing = "border-box";

for(let i = 0; i < gridSizePrompt; i++) { 
  gridRow.appendChild(gridCellCreation.cloneNode(true));
}
for(let i =0; i < gridSizePrompt; i++) { 
  gridContainer.appendChild(gridRow.cloneNode(true));
}

//Drawing Logic
const gridCellSelector = document.querySelectorAll(".grid-cell");
gridContainer.addEventListener("mousedown", startDrawing);
document.addEventListener("mouseup", stopDrawing);

function startDrawing(event) {
  if(event.target.classList.contains("grid-cell")) {
    event.target.classList.add("blue"); 
    gridCellSelector.forEach(drawMoveMouse);
  }
}

function drawMoveMouse(node) {
  node.addEventListener("mouseover", drawChangeColor);
}

function drawChangeColor(event) {
  event.target.classList.add("blue");
}

function stopDrawing() {
  gridCellSelector.forEach((node) => {
    node.removeEventListener("mouseover", drawChangeColor);
  })
}