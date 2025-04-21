// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ColorSelection.css';

// function BotGame() {
//   const [botLevel, setBotLevel] = useState('easy');
//   const navigate = useNavigate();

//   const handleStartGame = () => {
//     navigate('/game', { state: { mode: 'bot', botLevel } });
//   };

//   return (
//     <div className="bot-game-container">
//       <h2>משחק נגד בוטים</h2>
//       <div className="bot-game-form">
//         <label>רמת קושי של הבוט:</label>
//         <select value={botLevel} onChange={(e) => setBotLevel(e.target.value)}>
//           <option value="easy">קל</option>
//           <option value="medium">בינוני</option>
//           <option value="hard">קשה</option>
//         </select>
//         <button onClick={handleStartGame}>התחל משחק</button>
//       </div>
//     </div>
//   );
// }

// export default BotGame;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const CreateGame = () => {
  const [players, setPlayers] = useState(2);
  const [bots, setBots] = useState(0);
  const [isPrivate, setIsPrivate] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const generatePassword = () => {
    const strongPassword = Math.random().toString(36).slice(-8);
    setPassword(strongPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("הסיסמה הועתקה!");
  };

  const startGame = () => {
    if (isPrivate && !password) generatePassword();
    navigate("/game");
  };

  const goToLobby = () => {
    navigate("/lobby");
  };

  return (
    <div className="create-game-container">
      <h2>צור משחק חדש</h2>
      
      <label>כמות שחקנים:</label>
      <select value={players} onChange={(e) => setPlayers(Number(e.target.value))}>
        {[2, 3, 4, 6].map((num) => (
          <option key={num} value={num}>{num} שחקנים</option>
        ))}
      </select>
      
      <label>כמות בוטים:</label>
      <select value={bots} onChange={(e) => setBots(Number(e.target.value))}>
        {[0, 1, 2, 3].map((num) => (
          <option key={num} value={num}>{num} בוטים</option>
        ))}
      </select>
      
      <label>
        <input type="checkbox" checked={isPrivate} onChange={() => setIsPrivate(!isPrivate)} />
        משחק עם סיסמה
      </label>
      
      {isPrivate && (
        <div className="password-section">
          <input type="text" value={password} readOnly placeholder="סיסמה חזקה תיווצר כאן" />
          <button onClick={generatePassword}>🔄</button>
          <button onClick={copyToClipboard}>📋</button>
        </div>
      )}
      
      <div className="buttons">
        <button onClick={startGame}>מעבר למשחק</button>
        {!isPrivate && <button onClick={goToLobby}>לרשימת המשחקים</button>}
      </div>
    </div>
  );
};

export default CreateGame;
