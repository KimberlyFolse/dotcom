
function applySquareStyle(td, selected){ //export to textcard.js
  if(selected){
    td.className = "bingo-square selected";
  }else {
    td.className = "bingo-square unselected";
  }
}

const helpersLoaded = true;
