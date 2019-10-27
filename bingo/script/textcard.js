/*
FUNCTIONS USED FROM OTHER FILES:
  import {} from "./helpers.js"
*/

function createCard(_cardData){//exported to main.js
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
  for (let columnId = 0; columnId < _arr.length; columnId++) {
    const square = createSquare(rowId, columnId, _arr[columnId]);
    tr.appendChild(square);
  }
  return tr;
}

/* function that creates a square
applies input text
creates and assigns an i.d.
applies style from i.d.
adds event listener on click
*/
function createSquare(rowId, columnId, text) {
  if (!text) text = '';
  const td = document.createElement('td');
  const textContent = document.createTextNode(text);

  applySquareStyle(td, currentSelectionData[rowId][columnId])

  td.appendChild(textContent);
  td.addEventListener('click', handleSquareClick);
  const squareId = rowId.toString() + "-" + columnId.toString();
  td.id = "square" + squareId;

  return td;
}

function handleSquareClick(event) {
  const td = event.target
  toggleSquare(currentSelectionData, td);
  const win = checkBingoWin(currentSelectionData);
}

function toggleSquare(data, td){
  const rowId = parseInt(td.id.slice(-3,-2));
  const columnId = parseInt(td.id.slice(-1));
  data[rowId][columnId] = !data[rowId][columnId];

  applySquareStyle(td, data[rowId][columnId])
}

function checkBingoWin(data){
  let trueArray = [];
  let rowMatchData = {
    horizontal:{
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    },
    vertical:{
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    }
  }

  for (let rowId = 0; rowId < data.length; rowId++){
    for (let columnId=0; columnId < data[rowId].length; columnId++){
      if (data[rowId][columnId]){
        trueArray.push([rowId, columnId]);
        // console.log(rowId,columnId)
      }
    }
  }
  console.log("truearray", trueArray)

  for(let i = 0; i < trueArray.length; i++){
    const row = trueArray[i][0]
    const column = trueArray[i][1]

    rowMatchData.horizontal[row] ++
    rowMatchData.vertical[column] ++

  }

  // Object.keys(rowMatchData).forEach()

  console.log('rowMatchData', rowMatchData)
}
/* determine bingo win:
  1. get i.d.'s of squares that are true
  2. if >= 5, continue, else return false
  3. continue... get i.d.'s and determine pattern

  wins = {
    horizontal:{
      0: 1,
      1: 1,
      2: 2,
      3: 1,
      4: 1,
    },
    vertical:{
      0: 0,
      1: 0,
      2: 1,
      3: 5,
      4: 0,
    }
  }

*/



const textCardLoaded = true;
