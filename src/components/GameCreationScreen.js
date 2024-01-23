import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GameCreationScreen = ({ onStartGame }) => {
  const [playerName, setPlayerName] = useState(localStorage.getItem('playerName') || '');
  const [player1Color, setPlayer1Color] = useState(localStorage.getItem('player1Color') || '#ff0000');
  const [player2Color, setPlayer2Color] = useState(localStorage.getItem('player2Color') || '#00ff00');
  const [gameName, setGameName] = useState(localStorage.getItem('gameName') || '');
  const [backgroundColor, setBackgroundColor] = useState(localStorage.getItem('backgroundColor'));

  const navigate = useNavigate();

  const handleStartGame = () => {
    // Oyuncu ismi boşsa, geçiş yapma
    if (!playerName) {
      alert('Please enter your player name.');
      return;
    }
    
    // Oyun başlatıldığında, yönlendirme işlemini gerçekleştir
    onStartGame(playerName, player1Color, player2Color, backgroundColor, gameName);
    navigate('/game', { playerName, player1Color, player2Color, backgroundColor, gameName });

    // Local storage'e değerleri kaydet
    localStorage.setItem('playerName', playerName);
    localStorage.setItem('player1Color', player1Color);
    localStorage.setItem('player2Color', player2Color);
    localStorage.setItem('gameName', gameName);
    localStorage.setItem('backgroundColor', backgroundColor);
  };

  useEffect(() => {
    // Sayfa açıldığında local storage'dan değerleri al
    const storedPlayerName = localStorage.getItem('playerName');
    const storedPlayer1Color = localStorage.getItem('player1Color');
    const storedPlayer2Color = localStorage.getItem('player2Color');
    const storedGameName = localStorage.getItem('gameName');
    const storedBackgroundColor = localStorage.getItem('backgroundColor');

    if (storedPlayerName) setPlayerName(storedPlayerName);
    if (storedPlayer1Color) setPlayer1Color(storedPlayer1Color);
    if (storedPlayer2Color) setPlayer2Color(storedPlayer2Color);
    if (storedGameName) setGameName(storedGameName);
    if (storedBackgroundColor) setBackgroundColor(storedBackgroundColor);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Ekranın yüksekliği kadar genişlik
  };

  return (
    <div style={containerStyle}>
      <h2>Game Creation Screen</h2>
      <label>
        Game Name:
        <input type="text" value={gameName} onChange={(e) => setGameName(e.target.value)} />
      </label>
      <br />
      <label>
        Player Name:
        <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
      </label>
      <br />
      <label>
        Player 1 Disk Color:
        <input type="color" value={player1Color} onChange={(e) => setPlayer1Color(e.target.value)} />
      </label>
      <br />
      <label>
        Player 2 Disk Color:
        <input type="color" value={player2Color} onChange={(e) => setPlayer2Color(e.target.value)} />
      </label>
      <br />
      <label>
        Background Color:
        <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
      </label>
      <br />
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default GameCreationScreen;
