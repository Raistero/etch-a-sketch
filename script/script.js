const container = document.querySelector(".grid-container");
const button = document.querySelector("#prompt-button");
const cells = document.querySelectorAll(".cell");

//Variable used to track whether the mouse button is pressed or not
//Listeners added to change this state
let isMouseDown = false;
let isCursorIn = true;

function helperRGB() {
  return Math.floor(Math.random() * 256);
}

//Picks a random color and changes opacity for every mousover
function drawHelper(cell) {
  if (cell.style.opacity === '') {
    if (cell.classList.contains('cell')) {
      cell.style.backgroundColor = `rgb(${helperRGB()}, ${helperRGB()}, ${helperRGB()})`;
      cell.style.opacity = '0.1';
    }
  } else {
    cell.style.opacity = (+cell.style.opacity + 0.1).toFixed(1);
    console.log((+cell.style.opacity + 0.1).toFixed(1));
  }
}

container.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  let targetCell = e.target;
  drawHelper(targetCell);
});

container.addEventListener("mouseup", () => (isMouseDown = false));

container.addEventListener("mouseover", draw);

function draw(e) {
  let targetCell = e.target;
  if (isMouseDown) {
    drawHelper(targetCell);
  }
}

button.addEventListener("click", () => {
  let sizeInput = prompt("How many?");
  container.innerHTML = "";
  const rowGenerator = document.createElement("div");
  const cellGenerator = document.createElement("div");
  rowGenerator.classList.add("grid-row");
  cellGenerator.classList.add("cell");
  for (let i = 0; i < sizeInput; i++) {
    rowGenerator.appendChild(cellGenerator.cloneNode(true));
  }
  for (let i = 0; i < sizeInput; i++) {
    container.appendChild(rowGenerator.cloneNode(true));
  }

  const generatedCells = document.querySelectorAll(".cell");
  generatedCells.forEach((cell) => {
    cell.style.width = `${(16 / sizeInput) * 60}px`;
    cell.style.height = `${(16 / sizeInput) * 60}px`;
  });
});
