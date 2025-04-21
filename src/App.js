// //לבדיקה האם ה-Tailwind עובד אפשר למחוק בעיקרון--------
// import React from "react";
// import './App.css';
// function App() {
//   return (
//     <div className="min-h-screen bg-blue-300 flex items-center justify-center">
//       <div className="text-red text-6xl font-bold">
//         שלום מ-Tailwind 😊
//       </div>
//     </div>
//   );
// }


// export default App;


// //לוח פשוט להרצת אלגוריתם
// import React from 'react';
// import Board from './components/Board.js';
// import './App.css'; // ייבוא קובץ CSS עבור עיצוב כללי
// function App() {
//   return (
//     <div className="App">
//       <Board />
//     </div>
//   );
// }

// export default App;


//הטובב כרגע!! העמודים לדפדוף
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // ייבוא עבור אנימציות
import "./App.css"; // ייבוא קובץ CSS עבור עיצוב כללי
import Home from "./pages/Home";
import ColorSelection from "./pages/ColorSelection";
import BotGame from "./pages/BotGame";
import OnlineGame from "./pages/OnlineGame";
import Lobby from "./pages/Lobby";
import GameBoard from "./pages/GameBoard";
import GameSetup from "./pages/GameSetup";
import FormComponent from "./pages/connect";

import Board from "./components/Board";
function AnimatedRoutes() {
  const location = useLocation(); // מוודא שהמעבר יהיה חלק ולא יגרום לעיכוב

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/b" element={<Board />} />
        <Route path="/home" element={<Home />} />
        <Route path="/connect" element={<FormComponent />} />
        <Route path="/color-selection" element={<ColorSelection />} />
        <Route path="/bot-game" element={<BotGame />} />
        <Route path="/online-game" element={<OnlineGame />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/game" element={<GameBoard />} />
        <Route path="/game-setup" element={<GameSetup />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
export default App;



