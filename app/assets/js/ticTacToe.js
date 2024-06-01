let boardState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

function handleSquareClick(index) {
  if (boardState[index] !== '' || !gameActive) return;
  boardState[index] = currentPlayer;
  renderBoard();
  checkGameStatus();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkGameStatus() {
  if (checkWinner(currentPlayer)) {
    setStatus(`Player ${currentPlayer} wins!`);
    gameActive = false;
    return;
  }
  if (!boardState.includes('')) {
    setStatus(`It's a tie!`);
    gameActive = false;
    return;
  }
  setStatus(`Player ${currentPlayer}'s turn`);
}

function checkWinner(player) {
  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];
  return winningConditions.some(condition => condition.every(index => boardState[index] === player));
}

function renderBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';
  boardState.forEach((value, index) => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = value;
    if (value === 'X') {
      square.classList.add('selected_x');
    } else if (value === 'O') {
      square.classList.add('selected_o');
    }
    square.addEventListener('click', () => handleSquareClick(index));
    board.appendChild(square);
  });
}

function setStatus(status) {
  const statusElement = document.getElementById('status');
  statusElement.textContent = status;
}

function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  boardState = ['', '', '', '', '', '', '', '', ''];
  renderBoard();
  setStatus(`Player ${currentPlayer}'s turn`);
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetGame);
    renderBoard();
  });
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    handleSquareClick,
    checkGameStatus,
    checkWinner,
    resetGame,
    setStatus,
    renderBoard,
    get boardState() { return boardState; },
    set boardState(state) { boardState = state; },
    get currentPlayer() { return currentPlayer; },
    set currentPlayer(player) { currentPlayer = player; },
    get gameActive() { return gameActive; },
    set gameActive(active) { gameActive = active; }
  };
}
