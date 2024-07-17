const container = document.querySelector(".grid-container");
const button = document.querySelector("#prompt-button");
const cells = document.querySelectorAll(".cell");

//Variable used to track whether the mouse button is pressed or not
//Listeners added to change this state
let isMouseDown = false;
let isCursorIn = true;

container.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  let targetCell = e.target;
  if (targetCell.classList.contains("cell"))
    targetCell.style.backgroundColor = "blue";
});

container.addEventListener("mouseup", () => (isMouseDown = false));

container.addEventListener("mouseover", draw);

function draw(e) {
  let targetCell = e.target;
  if (isMouseDown) {
    if (targetCell.classList.contains("cell"))
      targetCell.style.backgroundColor = "blue";
  }
}

button.addEventListener("click", () => {
  let sizeInput = prompt("How many?");
  container.innerHTML = '';
  const rowGenerator = document.createElement('div');
  const cellGenerator = document.createElement('div');
  rowGenerator.classList.add('grid-row');
  cellGenerator.classList.add('cell');
  for(let i = 0; i < sizeInput; i++) {
    rowGenerator.appendChild(cellGenerator.cloneNode(true));
  }
  for(let i = 0; i < sizeInput; i++) {
    container.appendChild(rowGenerator.cloneNode(true));
  }

  const generatedCells = document.querySelectorAll('.cell')
  generatedCells.forEach((cell) => {
    cell.style.width = `${(16 / sizeInput) * 60}px`;
    cell.style.height = `${(16 / sizeInput) * 60}px`;
  });
});