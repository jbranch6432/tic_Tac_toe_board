const playerX = "X";
const playerO = "O";
const winnerCombinations = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [1,4,7],
    [6,7,8],
    [2,5,8],
    [0.4,8],
    [2,4,6],
];

const cellElements = document.querySelectorAll('[data-cell-index]');
const boardElement = document.getElementById('[board-container]');
const winningMessage = document.getElementById('[winningMessage]');
const restartButton = document.getElementById('[resart-button]');
