import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function GameBoard() {
  const { gameID } = useParams();
  const location = useLocation();
  const gameCode = location.state?.gameCode;

  return (
    <div className="game-page">
      <h1>משחק {gameID}</h1>
      {gameCode && <p>קוד משחק: {gameCode}</p>}
      <p>המשחק יתחיל כאשר כל השחקנים יתחברו</p>
    </div>
  );
}

export default GameBoard;
