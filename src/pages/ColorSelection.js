// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './ColorSelection.css';

// function ColorSelection() {
//   const [player1Color, setPlayer1Color] = useState('');
//   const [player2Color, setPlayer2Color] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();
//   const mode = location.state?.mode; // קבלת מצב המשחק מדף הבית

//   const handleStartGame = () => {
//     navigate('/game', { state: { player1Color, player2Color, mode } });
//   };

//   return (
//     <div className="color-selection-container">
//       <h2>בחירת צבעים</h2>
//       <div className="color-selection-form">
//         <div className="color-selection-input">
//           <label>שחקן 1:</label>
//           <select value={player1Color} onChange={(e) => setPlayer1Color(e.target.value)}>
//             <option value="">בחר צבע</option>
//             <option value="red">אדום</option>
//             <option value="blue">כחול</option>
//             <option value="green">ירוק</option>
//             {/* הוסף עוד צבעים */}
//           </select>
//         </div>
//         <div className="color-selection-input">
//           <label>שחקן 2:</label>
//           <select value={player2Color} onChange={(e) => setPlayer2Color(e.target.value)}>
//             <option value="">בחר צבע</option>
//             <option value="red">אדום</option>
//             <option value="blue">כחול</option>
//             <option value="green">ירוק</option>
//             {/* הוסף עוד צבעים */}
//           </select>
//         </div>
//         <button onClick={handleStartGame} disabled={!player1Color || !player2Color}>התחל משחק</button>
//       </div>
//     </div>
//   );
// }

// export default ColorSelection;






import React from "react";
import { motion } from "framer-motion";
import { Box, Card, CardContent, Typography, Button, Stack } from "@mui/material";
import GameCardLayout, { CustomButton } from "./GameCardLayout";
export default function PlayerSelection() {
  return (
    <GameCardLayout title="▶ OPTIONS">
      <Stack spacing={2} alignItems="center">
        <CustomButton>2 שחקנים</CustomButton>
        <CustomButton>3 שחקנים</CustomButton>
        <CustomButton>4 שחקנים</CustomButton>
        <CustomButton>6 שחקנים</CustomButton>
      </Stack>
      <Stack spacing={2} alignItems="center" mt={2}>
        <CustomButton color="success">Easy</CustomButton>
        <CustomButton color="primary">Normal</CustomButton>
        <CustomButton color="warning">Hard</CustomButton>
        <CustomButton color="error">Expert</CustomButton>
      </Stack>
    </GameCardLayout>
  );
}