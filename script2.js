const container = document.getElementById('container');
const cell = document.getElementsByClassName('cell');
const row = document.getElementsByClassName('row');
const button = document.getElementById('newgrid');

const makeGrid = (numRows) => {
  for (r = 0; r < numRows; r++) {
    const row = document.createElement('div');
    row.className = 'row';
    row.style.width = 400/numRows + 'px';
    row.style.height = 400/numRows + 'px';
    container.appendChild(row);
    for (c = 0; c < numRows; c++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.style.width = 400/numRows + 'px';
      cell.style.height = 400/numRows + 'px';
      row.appendChild(cell);
    }
  }
  
  container.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${numRows}, 1fr)`;
  let cellId = document.getElementsByClassName('cell');
  for (i = 0; i < cellId.length; i++) {
    cellId[i].addEventListener('mouseover', onHover);  
}
}
const defaultGrid = makeGrid(16);

function onHover() {
  this.style.backgroundColor = '#b5cdbe';
}

const newGrid = () => {
  container.innerHTML = '';
  numRows = window.prompt('How many squares per side?');
  makeGrid(numRows);
}

button.addEventListener ('click', newGrid);





