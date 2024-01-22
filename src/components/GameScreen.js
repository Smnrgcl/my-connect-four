import React, { useState, useEffect } from 'react';
import '../css/GameScreen.css'; // CSS dosyasını dahil et
import { useLocation } from 'react-router-dom';

const createEmptyBoard = () => {
  const board = Array.from({ length: 6 }, () => Array(7).fill(null));
  return board;
};

const GameScreen = ({ onLeaveGame }) => {
  const location = useLocation();
  const playerName = localStorage.getItem("playerName");
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState('Player 1');
  const [winner, setWinner] = useState(null);
  const [player1Color, setPlayer1Color] = useState('#ff0000'); // Default color: red
  const [player2Color, setPlayer2Color] = useState('#00ff00'); // Default color: green

  useEffect(() => {
    // Sayfa açıldığında local storage'dan renk bilgilerini al
    const storedPlayer1Color = localStorage.getItem('player1Color') || '#ff0000';
    const storedPlayer2Color = localStorage.getItem('player2Color') || '#00ff00';

    setPlayer1Color(storedPlayer1Color);
    setPlayer2Color(storedPlayer2Color);
  }, []);

  useEffect(() => {
    if (winner) {
      // Kazanan bir kez belirlendikten sonra oyunu durdur
      return;
    }

    const checkGameStatus = () => {
      // Dikey, yatay ve çapraz yönlere kazanan kontrolü yapılabilir
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
          const player = board[row][col];
          if (player) {
            // Dikey kontrol
            if (row + 3 < 6 && board[row + 1][col] === player && board[row + 2][col] === player && board[row + 3][col] === player) {
              setWinner(`${player} wins!`);
              return;
            }

            // Yatay kontrol
            if (col + 3 < 7) {
              if (board[row][col + 1] === player && board[row][col + 2] === player && board[row][col + 3] === player) {
                setWinner(`${player} wins!`);
                return;
              }
            }

            // Çapraz kontrol (sol üstten sağ alta)
            if (row + 3 < 6 && col + 3 < 7) {
              if (board[row + 1][col + 1] === player && board[row + 2][col + 2] === player && board[row + 3][col + 3] === player) {
                setWinner(`${player} wins!`);
                return;
              }
            }

            // Çapraz kontrol (sol alttan sağ üste)
            if (row - 3 >= 0 && col + 3 < 7) {
              if (board[row - 1][col + 1] === player && board[row - 2][col + 2] === player && board[row - 3][col + 3] === player) {
                setWinner(`${player} wins!`);
                return;
              }
            }
          }
        }
      }

      // Oyun berabere mi bitmiş kontrolü (tüm hücreler doluysa)
      if (board.every(row => row.every(cell => cell !== null))) {
        setWinner('The game is a draw!');
        // Berabere kalındığında oyunu sıfırla
        resetGame();
      }
    };

    // Oyun durumunu kontrol et
    checkGameStatus();
  }, [board, winner]);

  const dropDisk = (column) => {
    if (winner) {
      // Kazanan bir kez belirlendikten sonra disk yerleştirme işlemini engelle
      return;
    }

    for (let row = 5; row >= 0; row--) {
      if (!board[row][column]) {
        const newBoard = [...board];
        newBoard[row][column] = currentPlayer === 'Player 1' ? 'R' : 'Y';
        setBoard(newBoard);

        setCurrentPlayer(currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1');
        break;
      }
    }
  };
  const renderBoard = () => {
    return (
      <div className='board'>
        {board[0].map((_, columnIndex) => (
          <div key={columnIndex} className="column">
            {board.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="cell"
                onClick={() => dropDisk(columnIndex)}
              >
                {row[columnIndex] === 'R' ? (
                  <div className="red-disk" style={{ backgroundColor: player1Color }}></div>
                ) : row[columnIndex] === 'Y' ? (
                  <div className="yellow-disk" style={{ backgroundColor: player2Color }}></div>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  const resetGame = () => {
    // Oyunu sıfırla ve yeni bir oyun başlat
    setBoard(createEmptyBoard());
    setCurrentPlayer('Player 1');
    setWinner(null);
  };

  return (
    <div className="game-container">
      <h2>Connect Four Game</h2>
      <p>Welcome, {playerName}!</p>
      {renderBoard()}

      {winner ? (
        <div>
          <p className="winner-text">Winner: {winner}</p>
        
        </div>
      ) : (
        <p className="current-player-text">Current Player: {currentPlayer}</p>
      )}

      <button onClick={onLeaveGame}>Leave Game</button>
    </div>
  );
};

export default GameScreen;
