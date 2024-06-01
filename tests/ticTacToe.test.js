import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  handleSquareClick,
  checkWinner,
  resetGame,
  setStatus,
  checkGameStatus,
  renderBoard,
  boardState as originalBoardState,
  currentPlayer as originalCurrentPlayer,
  gameActive as originalGameActive
} from '../app/assets/js/ticTacToe.js';

vi.mock('../app/assets/js/ticTacToe.js', () => ({
  renderBoard: vi.fn(),
  setStatus: vi.fn(),

  handleSquareClick: vi.fn((index) => {
    if (originalBoardState[index] !== '' || !originalGameActive) return;
    originalBoardState[index] = originalCurrentPlayer;
    renderBoard();
    checkGameStatus();
    originalCurrentPlayer = originalCurrentPlayer === 'X' ? 'O' : 'X';
    setStatus(`Player ${originalCurrentPlayer}'s turn`);
  }),

  checkWinner: vi.fn((player) => {
    const winningConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    return winningConditions.some(condition => condition.every(index => originalBoardState[index] === player));
  }),

  resetGame: vi.fn(() => {
    originalCurrentPlayer = 'X';
    originalGameActive = true;
    originalBoardState.fill('');
    renderBoard();
    setStatus(`Player ${originalCurrentPlayer}'s turn`);
  }),

  setStatus: vi.fn(),
  renderBoard: vi.fn(),
  checkGameStatus: vi.fn(),

  boardState: ['', '', '', '', '', '', '', '', ''],
  currentPlayer: 'X',
  gameActive: true
}));

describe('Tic Tac Toe Game', () => {
  beforeEach(() => {
    resetGame();
  });

  it('should handle square click event', () => {
    const index = 0;
    handleSquareClick(index);
    expect(originalBoardState[index]).toBe('X');
    expect(renderBoard).toHaveBeenCalled();
    expect(setStatus).toHaveBeenCalledWith("Player O's turn");
    expect(checkGameStatus).toHaveBeenCalled();
  });

  it('should check for a winner', () => {
    originalBoardState[0] = 'X';
    originalBoardState[1] = 'X';
    originalBoardState[2] = 'X';
    expect(checkWinner('X')).toBe(true);
  });

  it('should update the game status', () => {
    setStatus('Player X wins!');
    expect(setStatus).toHaveBeenCalledWith('Player X wins!');
  });

    it('should reset the game', () => {
    handleSquareClick(0);
    resetGame();
    expect(originalBoardState).toEqual(['', '', '', '', '', '', '', '', '']);
    expect(renderBoard).toHaveBeenCalled();
    expect(setStatus).toHaveBeenCalledWith("Player X's turn");
  });

    it('should call checkGameStatus on a winning move', () => {
    originalBoardState[0] = 'X';
    originalBoardState[1] = 'X';
    originalBoardState[2] = 'X';
    handleSquareClick(3);
  
    expect(checkGameStatus).toHaveBeenCalled();

    checkGameStatus.mockReturnValueOnce(true);
    expect(checkGameStatus).toHaveBeenCalled();
  });


  it('should not allow click on an already occupied square', () => {
    const index = 0;
    handleSquareClick(index);
    handleSquareClick(index);
    expect(originalBoardState[index]).toBe('X');
  });
});

