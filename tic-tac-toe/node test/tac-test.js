const assert = require('assert');
const gameBoard = require('../tic-tac.js');

gameBoard.resetBoard();
assert.strictEqual(gameBoard.getCurrentPlayer(), 'x', 'starter should be x');

let ok = gameBoard.handleMove(0, 0);
assert.ok(ok, 'first move should succeed');

const state = gameBoard.getState();
assert.strictEqual(state.board[0][0], 'x', 'board[0][0] should be x');
assert.strictEqual(gameBoard.getCurrentPlayer(), 'o', 'after move, player should be o');

console.log('All tests passed');