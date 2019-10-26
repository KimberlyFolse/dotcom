#B I N G O

#Overview  
Two 5x5 grids
The top grid is for input
The bottom grid displays the input in a bingo format
input string is saved in cookies (card schema)
bingo card input states saved in cookies (selected schema)

#Description
iterate through data which represents squares of card
we have a 2 dimensional array:
  1. Large container array - entire card
  2. Inner arrays - each row

• grid of 5x5 inputs and another grid where bingo is actualized based on the inputs:
input:
  - we will read the values of the fields once a button is pressed.
  - we won't use submit form

 • bingo display card:
  - the squares will populate when the user saves their input.
  - each square will be press-able and have two states:true when highlighted, false when not highlighted
  - we have to save the state of the squares in cookies, just like the card schema
  -
  - our square creation function takes 3 parameters
  {
      "text": "user input",
      "index": [2, 2],
      "callback": function(boolean, index){ return {boolean, index} }
  }

#card schema
  [
    ['user text example 1', 'user text example 2', 'user text example 3', null, null],
    [null, null, null, null, null],
    [null, null, 'free space', null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ]

#selected schema
[
  [false, false, false, true, false],
  [false, false, false, true, false],
  [false, false, false, false, false],
  [false, false, true, true, false],
  [false, false, false, true, false]
]

BONUS
reset button to set everything back to null
hide input squares on 'save' & 'new card' button makes it reappear
randomize button to randomize order of squares
