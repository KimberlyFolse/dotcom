//function that iterates through rows and creates a card

function createCard(_cardData){
  let card = document.createElement('table');
   for(let i = 0; i < _cardData.length; i++){
     let row = createRow(_cardData[i], i);
     card.appendChild(row);
   }
   return card;
}

// function that iterates thru our squares and creates rows of squares
function createRow (_arr, rowId) {
  let tr = document.createElement('tr');
  for (let i = 0; i < _arr.length; i++) {
    const squareId = rowId.toString() + "-" + i.toString();
    const square = createSquare(squareId, _arr[i]);
    tr.appendChild(square);
  }
  return tr;
}

// function that creates a square
function createSquare(squareId, text) {
  if (!text) text = '';
  const td = document.createElement('td');
  const textContent = document.createTextNode(text);
  td.className = "bingo-square unselected";
  td.appendChild(textContent);
  td.addEventListener('click', handleSquareClick);
  td.id = "square" + squareId;

  return td;
}

function handleSquareClick(event) {
  const td = event.target

  let rowId = parseInt(td.id.slice(-3,-2));
  let columnId = parseInt(td.id.slice(-1));
  toggleSquare(rowId, columnId, currentSelectionData, td);
}

function toggleSquare(rowId, columnId, data, td){
  let selected = !data[rowId][columnId];
  data[rowId][columnId] = selected;

  if(selected){
    td.className = "bingo-square selected";
  }else {
    td.className = "bingo-square unselected";
  }
}

const textCardLoaded = true;
