import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListOfGamesScreen = () => {
  const navigate = useNavigate();

  // Local storage'tan oyun bilgi dizisini al
  let gameInfoArray = JSON.parse(localStorage.getItem('gameInfoArray')) || [];

  // Aynı isme sahip olan oyunların son kazananlarını güncelle
  const updatedGameInfoArray = [];
  const uniqueGames = new Set();
  gameInfoArray.reverse(); // En son oynanan oyunları ilk önce işleyelim

  gameInfoArray.forEach((oyunBilgisi) => {
    if (!uniqueGames.has(oyunBilgisi.gameName)) {
      // Aynı isme sahip oyunu ilk defa görüyoruz, kazananı güncelle
      uniqueGames.add(oyunBilgisi.gameName);
      const lastWinner = getLastWinner(oyunBilgisi.gameName);
      if (lastWinner) {
        oyunBilgisi.winner = lastWinner;
      }
      updatedGameInfoArray.push(oyunBilgisi);
    }
  });

  // Diziden son 10 oyunu al
  const son10Oyunlar = updatedGameInfoArray.slice(0, Math.min(updatedGameInfoArray.length, 10));

  const containerStyle = {
    backgroundColor: 'rgb(173, 216, 230)',
    display: 'flex',
    flexDirection: 'column', // Dikey yönde sırala
    alignItems: 'center',
    height: '100vh'
  };
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    backgroundColor: '#fff', // Örnek bir renk kodu
  };
  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  // Oyun adına göre son kazananı bulan yardımcı fonksiyon
  function getLastWinner(gameName) {
    for (let i = 0; i < gameInfoArray.length; i++) {
      if (gameInfoArray[i].gameName === gameName) {
        return gameInfoArray[i].winner;
      }
    }
    return null;
  }

  return (
    <div style={containerStyle}>
      <div>
        <h2>Oyun Skor Tablosu</h2>
      </div>
      <div>
        {/* GameCreationScreen sayfasına geçiş yapacak buton */}
        <button onClick={() => navigate('/')}>GameCreationScreen</button>
      </div>
      <div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Oyun Adı</th>
              <th style={thTdStyle}>Oyuncu Adı</th>
              <th style={thTdStyle}>Kazanan</th>
            </tr>
          </thead>
          <tbody>
            {son10Oyunlar.map((oyunBilgisi, index) => (
              <tr key={index}>
                <td style={thTdStyle}>{oyunBilgisi.gameName}</td>
                <td style={thTdStyle}>{oyunBilgisi.playerName}</td>
                <td style={thTdStyle}>{oyunBilgisi.winner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOfGamesScreen;
