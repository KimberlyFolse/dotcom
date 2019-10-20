//  ['user text example 1', 'user text example 2', 'user text example 3', null, null]

function createInputCard(_cardData){
  let table = document.createElement('table');
  for (let i=0; i < _cardData.length; i++){
    const row = createInputRow(_cardData[i], i)
    table.appendChild(row);
  }
  return table;
}

function createInputRow(_arr, rowId){
  let tr = document.createElement('tr');
  for(let i=0; i < _arr.length; i++){
    const squareId = rowId.toString() + "-" + i.toString();
    let square = createInputSquare(squareId, _arr[i]);
    tr.className = "input-row";

    tr.appendChild(square);
  }
  return tr;
}

function createInputSquare(squareId, text) {
  const td = document.createElement('td');
  const input = createInput(squareId, text);
  td.className = "input-cell";
  td.appendChild(input);

  return td;
}


function createInput(squareId, text) {
  const input = document.createElement("textarea");
  // input.type= 'text';
  input.id = squareId;
  input.value = text || '';

  input.setAttribute('maxlength', '60');
  input.setAttribute('placeholder', "Input text");
  draggable = false;

  return input;
}
const inputCardLoaded = true;

//
