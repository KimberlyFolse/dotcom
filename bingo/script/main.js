/*
FUNCTIONS USED FROM OTHER FILES:
  import {createCard} from "./textcard.js"
  import {createInputCard} from "./inputcard.js"
*/

const initialCardData = [
    ['user text example 1', 'user text example 2', 'user text example 3', null, null],
    [null, null, null, null, null],
    [null, null, 'free space', null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
]

let currentSelectionData = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
]

function bingoInit() {
    setTimeout(function() {
        if (typeof textCardLoaded == 'undefined' || typeof inputCardLoaded == 'undefined' || typeof helpersLoaded == 'undefined') {
            bingoInit()
        } else {
            setUp()
        }
    }, 100)
}

let saveButton;
function setUp() {
    createTables(initialCardData);
    saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', handleSave);
}

function createTables(cardData) {
  createTable(cardData, 'inputsContainer', createInputCard);
  createTable(cardData, 'bingoCardContainer', createCard);
}

function clearTables() {
    document.getElementById('inputsContainer').innerHTML = '';
    document.getElementById('bingoCardContainer').innerHTML = '';
}

function handleSave(){
  const rows = document.getElementsByClassName('input-row');
  const newCardData = getInputData(rows);
  clearTables();
  createTables(newCardData);
}

function getInputData(rows){
  let newCardData = [];
  for (let i=0; i<rows.length; i++){
    const row = rows[i];
    const data = getInputDataFromRow(row.children);
    newCardData.push(data);
  }
  return newCardData;
}

function getInputDataFromRow(rowData){
  let arr = [];
  for (let i=0; i<rowData.length; i++){
    const td = rowData[i];
    const value = td.children[0].value;
    arr.push(value);
  }
  return arr;
}

function createTable(data, containerId, tableFunction) {
    const table = tableFunction(data);
    const container = document.getElementById(containerId);
    container.appendChild(table);
}

// @TODO function that sets cookies

// TODO function that changes the color of a square (inside card) possibly separate file
