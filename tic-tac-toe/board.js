
const board = Array(9).fill(null);
const gameState ={
    gameboard: Array(9).fill(null), 
  currentPlayer: 'X',
  isGameOver: false
};
const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
  [0, 4, 8], [2, 4, 6]             // Diagonal
];
function checkWinner() {
  for (let combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    
    // Check if the first slot is filled and matches the next two
    if (gameState.board[a] && 
        gameState.board[a] === gameState.board[b] && 
        gameState.board[a] === gameState.board[c]) {
      return gameState.board[a]; // Returns 'X' or 'Y'
    }
  }

  // Check for a Draw (if all slots are filled and no winner)
  if (!gameState.board.includes(null)) {
    return 'Draw';
  }

  return null; // Game continues
}
function resetGame() {
  console.log("Resetting board...");
  gameState.board = Array(9).fill(null);
  gameState.currentPlayer = 'X';
  gameState.isGameOver = false;
}

function playMove(position) {
  if (gameState.isGameOver || gameState.board[position]) return;

  gameState.board[position] = gameState.currentPlayer;
  
  const winner = checkWinner();

  if (winner) {
    gameState.isGameOver = true;
    if (winner === 'Draw') {
      console.log("It's a draw! Resetting...");
    }
    if(gameState.board[position]!== undefined){
    console.log("position already taken")
    return
    }
     else {
      console.log(`Player ${winner} wins! Resetting...`);
    }
    // Set a small delay so players can see the final move before reset
    setTimeout(resetGame, 2000);
  } else {
    gameState.currentPlayer = (gameState.currentPlayer === 'X') ? 'Y' : 'X';
  }
}

