import React from 'react';

const ListOfGamesScreen = () => {
  // Local storage'tan oyun bilgi dizisini al
  const gameInfoArray = JSON.parse(localStorage.getItem('gameInfoArray')) || [];

  // Diziden son 10 oyunu al
  const son10Oyunlar = gameInfoArray.slice(Math.max(gameInfoArray.length - 10, 0));

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Dikey yönde sırala
    alignItems: 'center',
  };
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    backgroundColor: '#B0E0E6', // Örnek bir renk kodu
  };
  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

 

  return (
    <div style={containerStyle}>
      <div>
        <h2>Oyun Skor Tablosu</h2>
      </div>
      <div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Oyun Adı</th>
              <th style={thTdStyle}>Oyuncu Adı</th>
              <th style={thTdStyle}>Kazanan</th>
              {/* Skor eklemek istiyorsanız, bir skor başlığı ekleyebilirsiniz */}
              {/* <th style={thTdStyle}>Skor</th> */}
            </tr>
          </thead>
          <tbody>
            {/* Son 10 oyunu göstermek için map fonksiyonunu kullan */
            son10Oyunlar.map((oyunBilgisi, index) => (
              <tr key={index}>
                <td style={thTdStyle}>{oyunBilgisi.gameName}</td>
                <td style={thTdStyle}>{oyunBilgisi.playerName}</td>
                <td style={thTdStyle}>{oyunBilgisi.winner}</td>
                {/* Skor eklemek istiyorsanız, oyunBilgisi objesinden skoru alabilirsiniz */}
                {/* <td style={thTdStyle}>{oyunBilgisi.score}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOfGamesScreen;
