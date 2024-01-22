// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameCreationScreen from './components/GameCreationScreen';
import GameScreen from './components/GameScreen';
import ListOfGamesScreen from './components/ListOfGamesScreen';

const App = () => {
  const startGameHandler = (playerName, player1Color, player2Color) => {
    // Burada gerekirse oyun başlatma işlemleri yapabilirsiniz
    console.log('Game started with:', playerName, player1Color, player2Color);
  };

  const leaveGameHandler = () => {
    // Burada gerekirse oyunu terk etme işlemleri yapabilirsiniz
    console.log('Left the game');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<GameCreationScreen onStartGame={startGameHandler} />}
        />

        <Route
          path="/game"
          element={<GameScreen onLeaveGame={leaveGameHandler} />}
        />

        <Route path="/list" element={<ListOfGamesScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
