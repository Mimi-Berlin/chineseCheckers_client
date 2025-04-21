
// import React, { useEffect, useState } from "react";
// import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";
// import "./Board.css"; // ייבוא קובץ ה-CSS

// const HexBoard = () => {
//   const [selectedHex, setSelectedHex] = useState(null);
//   const [socket, setSocket] = useState(null);

//   // יצירת WebSocket עם עליית הקומפוננטה
//   useEffect(() => {
//     const ws = new WebSocket("ws://localhost:12345");
//     setSocket(ws);

//     ws.onopen = () => {
//       console.log("WebSocket connected");
//     };

//     ws.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       if (data.type === "select_hex") {
//         setSelectedHex({ q: data.q, r: data.r, s: data.s });
//         console.log("Selected from server:", data);
//       }
//     };

//     ws.onclose = () => {
//       console.log("WebSocket disconnected");
//     };

//     ws.onerror = (error) => {
//       console.error("WebSocket error", error);
//     };

//     return () => {
//       ws.close();
//     };
//   }, []);

//   const handleHexClick = (q, r, s) => {
//     setSelectedHex({ q, r, s });
//     if (socket && socket.readyState === WebSocket.OPEN) {
//       socket.send(JSON.stringify({ type: "hex_click", q, r, s }));
//     }
//   };

//   return (
//     <HexGrid width={800} height={600} viewBox="-50 -50 100 100">
//       <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
//         {[-2, -1, 0, 1, 2].map(q =>
//           [-2, -1, 0, 1, 2].map(r =>
//             Math.abs(q + r) <= 2 ? (
//               <Hexagon
//                 key={`${q},${r}`}
//                 q={q}
//                 r={r}
//                 s={-q - r}
//                 onClick={() => handleHexClick(q, r, -q - r)}
//                 style={{
//                   fill:
//                     selectedHex?.q === q && selectedHex?.r === r ? "#ffcc00" : "#ddd",
//                 }}
//               >
//                 <Text>{`${q},${r}`}</Text>
//               </Hexagon>
//             ) : null
//           )
//         )}
//       </Layout>
//     </HexGrid>
//   );
// };

// export default HexBoard;




//לוח 1 שעובד עם חיבור
// // Board.jsx
// import React, { useState } from "react";
// import CellButton from "./CellButton";
// import { useWebSocket } from "./useWebSocket";

// const Board = () => {
//   const rows = 17;
//   const cols = 13;

//   const [selectedFrom, setSelectedFrom] = useState(null); // מאיפה
//   const [selectedTo, setSelectedTo] = useState(null);     // לאן

//   const [boardState, setBoardState] = useState([]); // תוכל לשים פה later את מיקום כל החיילים

//   const handleMessage = (data) => {
//     if (data.type === "move_result") {
//       // נניח שהשרת החזיר תוצאה, תוכל פה לעדכן את מצב הלוח
//       console.log("Server move result:", data);
//     }
//   };

//   const { sendMessage } = useWebSocket(handleMessage);

//   const handleCellClick = (row, col) => {
//     if (!selectedFrom) {
//       setSelectedFrom({ row, col });
//     } else {
//       setSelectedTo({ row, col });

//       sendMessage({
//         type: "move_attempt",
//         from: selectedFrom,
//         to: { row, col },
//       });

//       // אפס בחירה אחרי שליחה
//       setSelectedFrom(null);
//       setSelectedTo(null);
//     }
//   };

//   return (
//     <table>
//       <tbody>
//         {Array.from({ length: rows }, (_, row) => (
//           <tr key={row}>
//             {Array.from({ length: cols }, (_, col) => {
//               const isSelected =
//                 (selectedFrom?.row === row && selectedFrom?.col === col) ||
//                 (selectedTo?.row === row && selectedTo?.col === col);
//               return (
//                 <td key={col}>
//                   <CellButton
//                     row={row}
//                     col={col}
//                     isSelected={isSelected}
//                     onClick={handleCellClick}
//                   />
//                 </td>
//               );
//             })}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Board;











// // Board.jsx
// import React, { useState } from "react";
// import Cell from "./Cell";
// //import Piece from "./Piece";

// const BOARD_ROWS = 17;
// const BOARD_COLS = 13;

// const initialBoard = () => {
//   const board = Array(BOARD_ROWS)
//     .fill(null)
//     .map(() => Array(BOARD_COLS).fill(null));

//   // שחקן 1 - שורות 0 ו-1
//   for (let r = 0; r < 2; r++) {
//     for (let c = 0; c < BOARD_COLS; c++) {
//       board[r][c] = "red";
//     }
//   }

//   // שחקן 2 - שורות 15 ו-16
//   for (let r = 15; r < 17; r++) {
//     for (let c = 0; c < BOARD_COLS; c++) {
//       board[r][c] = "blue";
//     }
//   }

//   return board;
// };

// export default function Board() {
//   const [board, setBoard] = useState(initialBoard());
//   const [selected, setSelected] = useState(null); // { row, col }

//   const handleCellClick = (row, col) => {
//     const cellValue = board[row][col];

//     if (selected) {
//       // ניסיון להזיז
//       const newBoard = board.map((row) => [...row]);
//       newBoard[row][col] = board[selected.row][selected.col];
//       newBoard[selected.row][selected.col] = null;
//       setBoard(newBoard);
//       setSelected(null);
//     } else if (cellValue) {
//       // בחירת חייל
//       setSelected({ row, col });
//     }
//   };

//   return (
//     <div style={{ display: "grid", gridTemplateRows: `repeat(${BOARD_ROWS}, 40px)`,
//      gridTemplateColumns: `repeat(${BOARD_COLS}, 40px)`
//   }}>
//       {board.map((row, rowIndex) =>
//         row.map((cell, colIndex) => (
//           <Cell
//             key={`${rowIndex}-${colIndex}`}
//             color={cell}
//             isSelected={
//               selected?.row === rowIndex && selected?.col === colIndex
//             }
//             onClick={() => handleCellClick(rowIndex, colIndex)}
//           />
//         ))
//       )}
//     </div>
//   );
// }









// Board.jsx
import React, { useState } from "react";

const BOARD_ROWS = 8;
const BOARD_COLS = 8;

const createInitialBoard = () => {
  const board = [];
  for (let row = 0; row < BOARD_ROWS; row++) {
    const currentRow = [];
    for (let col = 0; col < BOARD_COLS; col++) {
      // שתי שורות ראשונות עם צבע כחול, שתיים אחרונות עם אדום
      if (row < 2) {
        currentRow.push("blue");
      } else if (row >= BOARD_ROWS - 2) {
        currentRow.push("red");
      } else {
        currentRow.push(null);
      }
    }
    board.push(currentRow);
  }
  return board;
};

export default function Board() {
  const [board, setBoard] = useState(createInitialBoard());
  const [selected, setSelected] = useState(null);

  const handleClick = (row, col) => {
    const piece = board[row][col];

    if (selected) {
      const [fromRow, fromCol] = selected;
      const newBoard = board.map((r) => [...r]);

      // החלפת מקומות
      newBoard[row][col] = board[fromRow][fromCol];
      newBoard[fromRow][fromCol] = null;

      setBoard(newBoard);
      setSelected(null);
    } else if (piece) {
      setSelected([row, col]);
    }
  };

  return (
    <div className="grid grid-cols-8 gap-1 p-4  w-fit rounded-lg shadow-md">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isSelected =
            selected &&
            selected[0] === rowIndex &&
            selected[1] === colIndex;

          return (
            <button
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleClick(rowIndex, colIndex)}
              className={`
                w-12 h-12 rounded-full
                ${cell === "blue" ? "bg-blue-500" : ""}
                ${cell === "red" ? "bg-red-500" : ""}
                ${!cell ? "bg-white" : ""}
                ${isSelected ? "ring-4 ring-yellow-400" : ""}
                transition duration-300
              `}
            />
          );
        })
      )}
    </div>
  );
}
