import React from 'react';

const ListOfGamesScreen = () => {
  // Local storage'tan oyun bilgi dizisini al
  const gameInfoArray = JSON.parse(localStorage.getItem('gameInfoArray')) || [];

  // Diziden son 10 oyunu al
  const son10Oyunlar = gameInfoArray.slice(Math.max(gameInfoArray.length - 10, 0));

  return (
    <div>
      <h2>Oyun Listesi</h2>
      <ul>
        {/* Son 10 oyunu göstermek için map fonksiyonunu kullan */
        son10Oyunlar.map((oyunBilgisi, index) => (
          <li key={index}>
            <p>Oyun Adı: {oyunBilgisi.gameName}</p>
            <p>Oyuncu Adı: {oyunBilgisi.playerName}</p>
            <p>Kazanan: {oyunBilgisi.winner}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfGamesScreen;
