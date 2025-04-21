// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// import GameCardLayout, { CustomButton } from "./GameCardLayout";
// function OnlineGame() {
//   return (
//     <GameCardLayout title="שחק אונליין">
//         <div className="online-game-buttons">
//           <Link to="/lobby" state={{ mode: 'create' }} className="online-game-button">צור משחק</Link>
//           <Link to="/lobby" state={{ mode: 'join' }} className="online-game-button">הצטרף למשחק</Link>
//         </div>
//     </GameCardLayout>
//   );
// }

// export default OnlineGame;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GameCardLayout from "./GameCardLayout";
//import './GameSetup.css';

function OnlineGame() {
  const [mode, setMode] = useState(null); // 'create' או 'join'
  const [isPrivate, setIsPrivate] = useState(false);
  const [gameCode, setGameCode] = useState("");
  const navigate = useNavigate();

  // יצירת משחק חדש
  const createGame = async () => {
    const response = await fetch("http://localhost:8080/create_game", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isPrivate })
    });

    const data = await response.json();
    console.log("Game created:", data);
    navigate(`/game/${data.gameID}`, { state: { gameCode: data.accessCode } });
  };

  // הצטרפות למשחק קיים
  const joinGame = async () => {
    const response = await fetch("http://localhost:8080/join_game", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gameID: gameCode })
    });

    const data = await response.json();
    if (data.success) {
      navigate(`/game/${gameCode}`);
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
          <label>
            <input
              type="checkbox"
              checked={isPrivate}
              onChange={() => setIsPrivate(!isPrivate)}
            />
            האם המשחק יהיה פרטי?
          </label>
          <button onClick={createGame}>צור משחק</button>
        </div>
      ) : (
        // הצטרפות למשחק קיים
        <div className="game-setup-form">
          <h2>הצטרפות למשחק</h2>
          <input
            type="text"
            placeholder="הכנס קוד משחק"
            value={gameCode}
            onChange={(e) => setGameCode(e.target.value)}
          />
          <button onClick={joinGame}>הצטרף</button>
        </div>
      )}
    </GameCardLayout>
  );
}

export default OnlineGame;
