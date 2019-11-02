
const helpers = {
  applySquareStyle(td, selected){ //export to textcard.js
    if(selected){
        td.className = "bingo-square selected";
    }else {
        td.className = "bingo-square unselected";
    }
  },
  getHighlightedIndexes(data){ //export to textcard.js
    let highlightedIndexArray = [];
    for (let rowId = 0; rowId < data.length; rowId++){
        for (let columnId=0; columnId < data[rowId].length; columnId++){
            if (data[rowId][columnId] === true){
              highlightedIndexArray.push([rowId, columnId]);
            }
        }
    }

    return highlightedIndexArray;
    }
}

const helpersLoaded = true;
