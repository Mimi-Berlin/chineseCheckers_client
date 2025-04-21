// import React, { Component } from 'react';
// import Board from './Board';
// import cloneDeep from 'clone-deep';
// // import './GameLogic.scss';

// class GameLogic extends Component {
//   state = {
//     position: [], // המיקום של כל המשבצות והחיילים
//     selected: { key: '', style: {} },
//     turn: 0,
//     colors: ['pink', 'orange', 'brown', 'green', 'purple', 'blue'],
//   };

//   componentDidMount() {
//     // כאן תכניס את הלוגיקה של יצירת הלוח והחיילים
//     this.setState({ position: this.getChess() });
//   }

//   getChess = () => {
//     // נבצע את כל הקוד שקשור ב-6 החיילים והמיקומים
//     return []; // תחזור עם המיקום של החיילים והמשבצות
//   };

//   // כאן יהיו שאר הפונקציות שמטפלות בתהליכים כמו תנועה, נצחון וכו'
  
//   render() {
//     const { position } = this.state;
//     return (
//       <div className="game-logic">
//         <Board position={position} />
//       </div>
//     );
//   }
// }

// export default GameLogic;



// import React, { useState } from "react";
// import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";
// import "./GameLogic.css"; // ייבוא קובץ ה-CSS

// const HexBoard = () => {
//   const [selectedHex, setSelectedHex] = useState(null);

//   const handleHexClick = (q, r, s) => {
//     setSelectedHex({ q, r, s });
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
//                 style={{ fill: selectedHex?.q === q && selectedHex?.r === r ? "#ffcc00" : "#ddd" }}
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





// useWebSocket.js
import { useEffect, useRef } from "react";

export const useWebSocket = (onMessageCallback) => {
  const socketRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:12345");
    socketRef.current = ws;
  
    ws.onopen = () => console.log("🟢 WebSocket connected");
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessageCallback(data);
    };
    ws.onclose = (event) => {
      console.log("🔴 WebSocket closed!", event);
    };
    ws.onerror = (err) => {
      console.error("❌ WebSocket error", err);
    };
  
    return () => {
      console.log("🧹 Cleaning up WebSocket...");
      ws.close();
    };
  }, []); // ← תראי ששמתי פה [] ולא [onMessageCallback]
  

  const sendMessage = (msg) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(msg));
    }
  };

  return { sendMessage };
};
