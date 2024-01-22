import React from 'react';

const ListOfGamesScreen = () => {
  // New: Retrieve the game info array from local storage
  const gameInfoArray = JSON.parse(localStorage.getItem('gameInfoArray')) || [];

  return (
    <div>
      <h2>List of Games</h2>
      <ul>
        {/* New: Map through the game info array to display game information */}
        {gameInfoArray.map((gameInfo, index) => (
          <li key={index}>
            <p>Game Name: {gameInfo.gameName}</p>
            <p>Player Name: {gameInfo.playerName}</p>
            <p>Winner: {gameInfo.winner}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfGamesScreen;
