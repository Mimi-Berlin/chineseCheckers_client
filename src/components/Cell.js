// // CellButton.jsx לוח 2
// import React from "react";

// const CellButton = ({ row, col, isSelected, onClick }) => {
//   return (
//     <button
//       onClick={() => onClick(row, col)}
//       style={{
//         width: 30,
//         height: 30,
//         backgroundColor: isSelected ? "#4ade80" : "#e5e7eb",
//         border: "1px solid #ccc",
//         cursor: "pointer",
//       }}
//     >
//       {row},{col}
//     </button>
//   );
// };

// export default CellButton;





// Cell.jsx
import React from "react";

export default function Cell({ color, isSelected, onClick }) {
  const backgroundColor = color
    ? color
    : isSelected
    ? "lightgray"
    : "white";

  return (
    <button
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor,
        border: isSelected ? "2px solid black" : "1px solid #ccc",
        margin: "1px",
      }}
    />
  );
}
