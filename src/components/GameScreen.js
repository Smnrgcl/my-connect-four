import React, { useState, useEffect } from 'react';
import '../css/GameScreen.css'; // CSS dosyasını dahil et
import { useLocation, Link } from 'react-router-dom';

const createEmptyBoard = () => {
  const board = Array.from({ length: 6 }, () => Array(7).fill(null));
  return board;
};

const GameScreen = ({ onLeaveGame }) => {
  const location = useLocation();
  const playerName = localStorage.getItem('playerName');
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState(playerName);
  const [winner, setWinner] = useState(null);
  const [player1Color, setPlayer1Color] = useState('#ff0000'); // Default color: red
  const [player2Color, setPlayer2Color] = useState('#00ff00'); // Default color: green
  const [isComputersTurn, setIsComputersTurn] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(localStorage.getItem('backgroundColor'));
  const gameInfoArray = JSON.parse(localStorage.getItem('gameInfoArray')) || [];

  useEffect(() => {
    // Sayfa açıldığında local storage'dan renk bilgilerini al
    const storedPlayer1Color = localStorage.getItem('player1Color') || '#ff0000';
    const storedPlayer2Color = localStorage.getItem('player2Color') || '#00ff00';
    const storedBackgroundColor = localStorage.getItem('backgroundColor');

    setPlayer1Color(storedPlayer1Color);
    setPlayer2Color(storedPlayer2Color);
    setBackgroundColor(storedBackgroundColor);
  }, []);


  const checkGameStatus = (newBoard=board) => {
    // Dikey, yatay ve çapraz yönlere kazanan kontrolü yapılabilir
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        const player = newBoard[row][col];
        if (player) {
          // Dikey kontrol
          if (row + 3 < 6 && newBoard[row + 1][col] === player && newBoard[row + 2][col] === player && newBoard[row + 3][col] === player) {
            setWinner(`${player === 'R' ? playerName : 'Player 2'} wins!`);
            return;
          }

          // Yatay kontrol
          if (col + 3 < 7) {
            if (newBoard[row][col + 1] === player && newBoard[row][col + 2] === player && newBoard[row][col + 3] === player) {
              setWinner(`${player === 'R' ? playerName : 'Computer'} wins!`);
              return;
            }
          }

          // Çapraz kontrol (sol üstten sağ alta)
          if (row + 3 < 6 && col + 3 < 7) {
            if (newBoard[row + 1][col + 1] === player && newBoard[row + 2][col + 2] === player && newBoard[row + 3][col + 3] === player) {
              setWinner(`${player === 'R' ? playerName : 'Computer'} wins!`);
              return;
            }
          }

          // Çapraz kontrol (sol alttan sağ üste)
          if (row - 3 >= 0 && col + 3 < 7) {
            if (newBoard[row - 1][col + 1] === player && newBoard[row - 2][col + 2] === player && newBoard[row - 3][col + 3] === player) {
              setWinner(`${player === 'R' ? playerName : 'Computer'} wins!`);
              return;
            }
          }
        }
      }
    }

    // Oyun berabere mi bitmiş kontrolü (tüm hücreler doluysa)
    if (newBoard.every(row => row.every(cell => cell !== null))) {
      setWinner('The game is a draw!');
      // Berabere kalındığında oyunu sıfırla
      resetGame();
    }
  };  
  useEffect(() => {
    if (winner) {
      // Kazanan bir kez belirlendikten sonra oyunu durdur
      saveGameInfo(); // Kazanan bilgilerini local storage'a kaydet
      return;
    }

    

    // Oyun durumunu kontrol et
    checkGameStatus();

    // Bilgisayarın hamlesini yap sadece eğer kazanan yoksa ve sıra Player 2'deyse
    if (!winner && currentPlayer === 'Computer' && isComputersTurn) {
      makeRandomMove();
    }
  }, [board, winner, currentPlayer, isComputersTurn]);

  const dropDisk = (column) => {
    if (winner) {
      // Kazanan bir kez belirlendikten sonra disk yerleştirme işlemini engelle
      return;
    }

    for (let row = 5; row >= 0; row--) {
      if (!board[row][column]) {
        const newBoard = [...board];
        newBoard[row][column] = currentPlayer === playerName? 'R' : 'Y';

        setCurrentPlayer(currentPlayer === playerName ? 'Computer' : playerName);
        console.log(checkGameStatus(newBoard));
        console.log("check");
        setIsComputersTurn(true); // Bilgisayarın sırasını beklet
        setBoard(newBoard);

        break;
      }
    }
  };

  const makeRandomMove = () => {
    // Bilgisayarın rastgele bir sütuna disk bırakması
    const availableColumns = [];
    for (let col = 0; col < 7; col++) {
      if (!board[0][col]) {
        availableColumns.push(col);
      }
    }
  
    if (availableColumns.length > 0 && currentPlayer === 'Computer' && !winner && isComputersTurn) {
      const randomColumn = availableColumns[Math.floor(Math.random() * availableColumns.length)];
      const timer = setTimeout(() => {
        dropDisk(randomColumn);
        setIsComputersTurn(false); // Bilgisayarın sırasını bitir
        clearTimeout(timer);
      }, 1000); // 1 saniye bekletme süresi (istediğiniz süreyi ayarlayabilirsiniz)
    }
  };
  

  const renderBoard = () => {
    return (
      <div className='board' style={{ backgroundColor: backgroundColor }}>
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
    setCurrentPlayer(currentPlayer === playerName ? 'Computer' : playerName);
    setWinner(null);
  };

  const saveGameInfo = () => {
    // Kazanan bilgilerini local storage'a kaydet
    const gameInfo = {
      winner: winner,
      playerName: playerName,
      gameName: 'Connect Four', // Oyun adını istediğiniz şekilde ayarlayabilirsiniz
    };

    gameInfoArray.push(gameInfo);
    localStorage.setItem('gameInfoArray', JSON.stringify(gameInfoArray));
  };

  return (
    <div className="game-container">

      <button hidden onClick={() => {
        setIsComputersTurn(true)
      }}>true</button>
       <button hidden onClick={() => {
        setIsComputersTurn(false)
      }}>false</button>
      <h2>Connect Four Game</h2>
      <p>Welcome, {playerName}!</p>
      <div>
        <Link to="/history">Game History</Link>
      </div>
      {renderBoard()}

      {winner ? (
        <div>
          <p className="winner-text">Winner: {winner}</p>
          {/* Yeni: Oyun bilgilerini listeleyen bir bağlantı */}
          <Link to="/history">View Game History</Link>
        </div>
      ) : (
        <p className="current-player-text">Current Player: {currentPlayer}</p>
      )}

      <button onClick={onLeaveGame}>Leave Game</button>
    </div>
  );
};

export default GameScreen;
