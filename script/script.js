const container = document.querySelector('.grid-container');
const changeSquaresButton = document.querySelector('#prompt-button');
const randomColoursButton = document.querySelector('#random-colours');
const clearButton = document.querySelector('#clear');
const cells = document.querySelectorAll('.cell');

//Variable used to track whether the mouse button is pressed or not
//Listeners added to change this state
let isMouseDown = false;
let isRandomColourToggle = false;

function helperRGB() {
  return Math.floor(Math.random() * 256);
}

//Default blue colour draw
function drawHelper(cell) {
  if (cell.classList.contains('cell')) {
    cell.style.backgroundColor = 'blue';
  }
}

//Picks a random color and changes opacity for every mousover
function drawRandomHelper(cell) {
  if (cell.style.opacity === '') {
    if (cell.classList.contains('cell')) {
      cell.style.backgroundColor = `rgb(${helperRGB()}, ${helperRGB()}, ${helperRGB()})`;
      cell.style.opacity = '0.1';
    }
  } else {
    cell.style.opacity = (+cell.style.opacity + 0.1).toFixed(1);
  }
}

function clearHelper() {
  cells.forEach((cell) => {
    cell.style.backgroundColor = '';
    cell.style.opacity = '';
  });
}

container.addEventListener('mousedown', (e) => {
  isMouseDown = !isMouseDown;
  if(isRandomColourToggle){
    drawRandomHelper(e.target);
  } else {
    drawHelper(e.target);
  }
});

container.addEventListener('mouseup', () => (isMouseDown = !isMouseDown));

container.addEventListener('mouseover', (e) => {
  if (isMouseDown && !isRandomColourToggle) { 
    drawHelper(e.target);
  }
  if(isMouseDown && isRandomColourToggle) {
    drawRandomHelper(e.target);
  }
});

changeSquaresButton.addEventListener("click", () => {
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

//Clears the board when clicked
randomColoursButton.addEventListener('click', () => {
  clearHelper();
  isRandomColourToggle = !isRandomColourToggle;
  if(isRandomColourToggle){
    randomColoursButton.style.backgroundColor = '#575353';
    randomColoursButton.style.color = '#d1c5c5';
  } else {
    randomColoursButton.style.backgroundColor = '';
    randomColoursButton.style.color = '';
  }
});

clearButton.addEventListener('click', clearHelper);
