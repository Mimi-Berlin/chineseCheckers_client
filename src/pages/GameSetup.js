import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GameCardLayout from "./GameCardLayout";
//import './GameSetup.css';

function GameSetup() {
  const [mode, setMode] = useState(null); // 'create' או 'join'
  const [isPrivate, setIsPrivate] = useState(false);
  const [gameName, setGameName] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [gamesList, setGamesList] = useState([]); // רשימת המשחקים הפעילים
  const navigate = useNavigate();

  useEffect(() => {
    // טעינת רשימת המשחקים מהשרת
    const fetchGames = async () => {
      const response = await fetch("http://localhost:3000/games_list");
      const data = await response.json();
      setGamesList(data.games);
    };

    fetchGames();
  }, []);

  // יצירת משחק חדש
  const createGame = async () => {
    if (!gameName.trim()) {
      alert("חובה לבחור שם לקבוצה!");
      return;
    }

    // אם המשתמש רוצה קוד אוטומטי
    const finalCode = isPrivate && !gameCode ? Math.random().toString(36).substring(2, 8).toUpperCase() : gameCode;

    const response = await fetch("http://localhost:3000/create_game", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gameName, isPrivate, accessCode: finalCode })
    });

    const data = await response.json();
    console.log("Game created:", data);

    navigate(`/game/${data.gameID}`, { state: { gameCode: finalCode } });
  };

  // הצטרפות למשחק קיים
  const joinGame = async (selectedGame) => {
    if (selectedGame.isPrivate && !gameCode) {
      alert("זהו משחק פרטי, יש להזין קוד!");
      return;
    }

    const response = await fetch("http://localhost:3000/join_game", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gameID: selectedGame.gameID, accessCode: gameCode })
    });

    const data = await response.json();
    if (data.success) {
      navigate(`/game/${selectedGame.gameID}`);
    } else {
      alert("קוד שגוי או שהמשחק לא קיים");
    }
  };

  return (
    <GameCardLayout title="משחק אונליין">
      {!mode ? (
        // תצוגת הכפתורים הראשונית
        <div className="online-game-buttons">
          <button onClick={() => setMode('create')} className="online-game-button">צור משחק</button>
          <button onClick={() => setMode('join')} className="online-game-button">הצטרף למשחק</button>
        </div>
      ) : mode === 'create' ? (
        // יצירת משחק חדש
        <div className="game-setup-form">
          <h2>יצירת משחק חדש</h2>
          <input
            type="text"
            placeholder="בחר שם לקבוצה"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={isPrivate}
              onChange={() => setIsPrivate(!isPrivate)}
            />
            האם המשחק יהיה פרטי?
          </label>

          {isPrivate && (
            <div>
              <input
                type="text"
                placeholder="הזן קוד או השאר ריק לקבלת קוד אוטומטי"
                value={gameCode}
                onChange={(e) => setGameCode(e.target.value)}
              />
              {gameCode && (
                <button onClick={() => navigator.clipboard.writeText(gameCode)}>📋 העתק קוד</button>
              )}
            </div>
          )}

          <button onClick={createGame}>🚀 התחל משחק</button>
        </div>
      ) : (
        // הצטרפות למשחק קיים
        <div className="game-setup-form">
          <h2>הצטרפות למשחק</h2>
          {gamesList.length === 0 ? (
            <p>אין כרגע משחקים פעילים.</p>
          ) : (
            <ul>
              {gamesList.map((game) => (
                <li key={game.gameID}>
                  <button onClick={() => joinGame(game)}>
                    {game.gameName} {game.isPrivate ? "🔒 (פרטי)" : "🌍 (פתוח)"}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <input
            type="text"
            placeholder="הכנס קוד משחק (אם נדרש)"
            value={gameCode}
            onChange={(e) => setGameCode(e.target.value)}
          />
        </div>
      )}
    </GameCardLayout>
  );
}

export default GameSetup;
