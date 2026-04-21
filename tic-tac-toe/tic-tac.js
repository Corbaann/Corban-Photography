// ...existing code...
const gameBoard = (() => {
  let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const players = ["x", "o"];
  let currentPlayer = "x";
  let gameActive = true;
  const winPatterns = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];

  let winner = null;
  let onWin = null;
  let onDraw = null;

  const isBoardFull = () =>
     board.every(row => row.every(cell => cell !== null));

  const checkWinner = (marker) =>
    winPatterns.some(pattern => pattern.every(([r, c]) => board[r][c] === marker));

  const resetBoard = () => {
    board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    gameActive = true;
    winner = null;
    currentPlayer = "x";
  };

  const handleMove = (row, col) => {
    if (!gameActive) return false;
    if (typeof row !== "number" || typeof col !== "number") return false;
    if (row < 0 || row > 2 || col < 0 || col > 2) return false;
    if (!isEmpty(row, col)) return false;

    board[row][col] = currentPlayer;

    if (checkWinner(currentPlayer)) {
      winner = currentPlayer;
      gameActive = false;
      if (typeof onWin === "function") onWin(winner);
      return true;
    }

    if (isBoardFull()) {
      gameActive = false;
      if (typeof onDraw === "function") onDraw();
      return true;
    }

    currentPlayer = currentPlayer === "x" ? "o" : "x";
    return true;
  };

  const getState = () => ({
    board: board.map(row => [...row]),
    currentPlayer,
    gameActive,
    winner,
    isDraw: !gameActive && winner === null && isBoardFull(),
  });

  const getCurrentPlayer = () => currentPlayer;

  const isEmpty = (row, col) => board[row]?.[col] === null;

  const getWinningPatterns = () => winPatterns;

  const setOnWin = (cb) => { onWin = typeof cb === 'function' ? cb : null; };
  const setOnDraw = (cb) => { onDraw = typeof cb === 'function' ? cb : null; };

  return {
    handleMove,
    resetBoard,
    getState,
    getCurrentPlayer,
    isEmpty,
    getWinningPatterns,
    setOnWin,
    setOnDraw,
  };
})();
gameBoard.onWin = (winner) => console.log(`🎉 Player ${winner} wins!`);
gameBoard.onDraw = (nextStarter) => console.log(`🤝 Draw! Next game starts with ${nextStarter}`);
gameBoard.onMoveSuccess = (row, col, player, isWin) => {
  console.log(`Move: ${player} at (${row},${col})`);
  if (!isWin && !gameBoard.getState().isDraw) console.log(`Next player: ${gameBoard.getCurrentPlayer()}`);
};
gameBoard.onError = (err) => console.error(err);
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gameBoard;
}