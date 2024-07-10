const container = document.querySelector(".grid-container");

// container.addEventListener("mousedown", clickHandler);

// function clickHandler(e) {
//   let targetCell = e.target;
//   if (targetCell.classList.contains("cell")) {
//     targetCell.style.backgroundColor = "blue";
//     container.addEventListener("mouseover", drawHandler);
//     targetCell.addEventListener("mouseup", () => {
//       container.removeEventListener("mouseover", drawHandler)
//       console.log("mousup");
//     });
//   }
// }

// function drawHandler(e) {
//   let drawCell = e.target;
//   if (drawCell.classList.contains("cell"))
//     drawCell.style.backgroundColor = "blue";
// }

//Variable used to track whether the mouse button is pressed or not
//Listeners added to change this state
let isMouseDown = false;
let isCursorIn = true;

container.addEventListener('mousedown', e => {
  isMouseDown = true
  let targetCell = e.target;
  if(targetCell.classList.contains('cell'))
    targetCell.style.backgroundColor = 'blue';
});

container.addEventListener('mouseup', () => 
  isMouseDown = false
);

container.addEventListener('mouseover', draw);

function draw(e) {
  let targetCell = e.target;
  if(isMouseDown){
    if(targetCell.classList.contains('cell'))
      targetCell.style.backgroundColor = 'blue';
  }
}