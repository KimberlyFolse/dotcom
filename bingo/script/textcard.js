//function that iterates through rows and creates a card

function createCard(_cardData){
  let card = document.createElement('table');
   for(let i = 0; i < _cardData.length; i++){
     let row = createRow(_cardData[i]);
     card.appendChild(row);
   }
   return card;
}

// function that iterates thru our squares and creates rows of squares
function createRow (_arr) {
  let tr = document.createElement('tr');
  for (let i = 0; i < _arr.length; i++) {
    const square = createSquare(_arr[i]);
    tr.appendChild(square);
  }
  return tr;
}

// function that creates a square
function createSquare(text) {
  if (!text) text = '';
  const td = document.createElement('td');
  const textContent = document.createTextNode(text);
td.className = "bingo-cell";
  td.appendChild(textContent);

  return td;
}
const textCardLoaded = true;
