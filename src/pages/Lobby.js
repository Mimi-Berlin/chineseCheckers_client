import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ColorSelection.css';

function Lobby() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const mode = location.state?.mode; // 'create' או 'join'
  const lobbyId = location.state?.lobbyId; // אם מצטרפים למשחק קיים

  useEffect(() => {
    // כאן תתחבר לשרת Socket.IO ותטפל ב-events
    // לדוגמה: הצטרפות שחקנים, התחלת משחק, וכו'
  }, [lobbyId]);

  const handleStartGame = () => {
    // כאן תשלח הודעה לשרת להתחיל את המשחק
    navigate('/game', { state: { mode: 'online', players } });
  };

  return (
    <div className="lobby-container">
      <h2>לובי</h2>
      <div className="players-list">
        <h3>שחקנים:</h3>
        <ul>
          {players.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      </div>
      {mode === 'create' && <button onClick={handleStartGame}>התחל משחק</button>}
    </div>
  );
}

export default Lobby;