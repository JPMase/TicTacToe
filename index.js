// Board diagram
//  1 | 2 | 3
// --- --- ---
//  4 | 5 | 6
// --- --- ---
//  7 | 8 | 9

// Create our actual board
var matrix = [
[1,2,3],
[4,5,6],
[7,8,9]
]

// Positions
// 00 |01 |02
// --- --- ---
// 10 |11 |12
// --- --- ---
// 20 |21 |22

// Create our display board
var board = ' ' + matrix[0][0] + ' | ' + matrix[0][1] + ' | ' + matrix[0][2] + '\n--- --- ---\n ' + matrix[1][0] + ' | ' + matrix[1][1] + ' | ' + matrix[1][2] + '\n--- --- ---\n ' + matrix[2][0] + ' | ' + matrix[2][1] + ' | ' + matrix[2][2] + ' ';

// Show board
console.log(board);

// Move prompt
var move = prompt("Make a move", "1-9");

var turn = 0;

// if (!place[move]) {
//   console.log('That is not a valid move. Please enter a number 1-9');
// } else if (place[move] === 'X' || place[move] === 'O') {
//   console.log('That spot is taken. Please choose a different move');
// } else {
//   if (turn % 2 === 0) {
//     place[move] = 'X';
//     turn++;
//   } else {
//     place[move] = 'O';
//     turn++;
//   }
// }

// // Show updated board
// console.log(board);

// Search for winners
for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
    if (move == matrix[i][j]) {
      if (turn % 2 === 0) {
        matrix[i][j] = 'X';
        turn++;
      } else {
        matrix[i][j] = 'O';
        turn++;
      }
    } else {
      console.log('That is not a valid move. Please choose again');
    }
  }
}





