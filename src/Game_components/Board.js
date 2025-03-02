import React from "react";
import './Board.css';
const BOARD_SIZE = 17; // לוח 17x17
const INITIAL_POSITIONS = {
  red: [ [0,3], [0,4], [0,5], [1,3], [1,4], [1,5], [2,3], [2,4], [3,3], [3,4] ],
  blue: [ [13,13], [13,14], [13,15], [14,13], [14,14], [14,15], [15,13], [15,14], [16,13], [16,14] ],
  // הוסיפי כאן עוד שחקנים...
};

function Board() {
  console.log("hello")
  const renderCell = (row, col) => {
    console.log("Rendering cell at:", row, col); // בדיקה
    let player = null;
    for (let color in INITIAL_POSITIONS) {
      if (INITIAL_POSITIONS[color].some(([r, c]) => r === row && c === col)) {
        player = color;
      }
    }
    return <div key={`${row}-${col}`} className={`cell ${player ? `player-${player}` : ""}`}></div>;
  };


  return (
    <div className="board">
      <h1>Game Board</h1>
      {Array.from({ length: BOARD_SIZE }).map((_, row) => (
        <div key={row} className="row">
          {Array.from({ length: BOARD_SIZE }).map((_, col) => renderCell(row, col))}
        </div>
      ))}
    </div>
  );
}

export default Board;
