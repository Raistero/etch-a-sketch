const container = document.querySelector('.grid-container');

container.addEventListener("mousedown", clickHandler);

function clickHandler(e) {
  let targetCell = e.target;
  if(targetCell.classList.contains('cell')){
    targetCell.style.backgroundColor = 'blue';
    container.addEventListener('mouseover', (e) => {
      // console.log('hey');
      // e.target.style.backgroundColor = 'blue';
      let drawCell = e.target;
      if(drawCell.classList.contains('cell')) {
        drawCell.style.backgroundColor = 'blue';
      }
    })
  }
}