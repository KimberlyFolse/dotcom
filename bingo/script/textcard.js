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

    helpers.applySquareStyle(td, currentSelectionData[rowId][columnId])

    td.appendChild(textContent);
    td.addEventListener('click', handleSquareClick);
    const squareId = rowId.toString() + "-" + columnId.toString();
    td.id = "square" + squareId;

    return td;
}

function handleSquareClick(event) {
    const td = event.target
    const newSelectionData = toggleSquare(currentSelectionData, td);
    const win = checkBingoWin(newSelectionData);
    if (win){
        window.alert("BINGO!!!BONGO!!!");
    }
}

function toggleSquare(data, td){
    const rowId = parseInt(td.id.slice(-3,-2));
    const columnId = parseInt(td.id.slice(-1));
    data[rowId][columnId] = !data[rowId][columnId];

    helpers.applySquareStyle(td, data[rowId][columnId])
    return data
}

function checkBingoWin(data){
    let highlightedIndexArray = helpers.getHighlightedIndexes(data);
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
    for(let i = 0; i < highlightedIndexArray.length; i++){
        const row = highlightedIndexArray[i][0]
        const column = highlightedIndexArray[i][1]

        rowMatchData.horizontal[row] ++
        rowMatchData.vertical[column] ++

        if (rowMatchData.horizontal[row] === 5 || rowMatchData.vertical[column] === 5){
            return true;
        }
    }
}
const textCardLoaded = true;
