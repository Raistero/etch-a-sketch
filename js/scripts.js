const gridContainer = document.querySelector(".grid-container");

for(let i = 1; i < 257; i++) {
  const gridCellLoop = document.createElement("div");
  gridCellLoop.classList.add("grid-cell");
  gridContainer.appendChild(gridCellLoop);
}

const gridCell = document.querySelectorAll(".grid-cell");

gridContainer.addEventListener("mousedown", startDrawing);
document.addEventListener("mouseup", stopDrawing);

function startDrawing(event) {
  if(event.target.classList.contains("grid-cell")) {
    event.target.classList.add("blue"); 
    gridCell.forEach(drawMoveMouse);
  }
}

function drawMoveMouse(node) {
  node.addEventListener("mouseover", drawChangeColor);
}

function drawChangeColor(event) {
  event.target.classList.add("blue");
}

function stopDrawing() {
  gridCell.forEach((node) => {
    node.removeEventListener("mouseover", drawChangeColor);
  })
}







// gridCell.forEach((node) => {
//   node.addEventListener("mousedown", drawing);
//     gridCell.forEach((anotherNode) => {
//       anotherNode.addEventListener("mouseover", drawing)
//     })
// });

// function drawing(e) {
//  e.target.style.backgroundColor = "blue";
//  console.log("hey");
// }