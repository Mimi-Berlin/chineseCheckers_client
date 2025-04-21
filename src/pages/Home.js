import React from "react";
import { Button, Stack } from "@mui/material";
import GameCardLayout, {CustomButton} from "./GameCardLayout";
import { useNavigate } from "react-router-dom";

export default function GameModeSelection() {
  const navigate = useNavigate();
  return (
    <GameCardLayout title="בחר סוג משחק">
      <Stack spacing={2} alignItems="center">
        <CustomButton color="primary" onClick={() => navigate("/bot-game")}>
          משחק מול בוט
        </CustomButton>
        <CustomButton color="secondary" onClick={() => navigate("/game-setup")}>
          משחק מול שחקן ברשת
        </CustomButton>
        <CustomButton color="success" onClick={() => navigate("/color-selection")}>
          משחק מול שחקן לוקאלי
        </CustomButton>
      </Stack>
    </GameCardLayout>
  );
}








// import React from "react";
// import { Card, CardContent, Typography, Button, Stack, Box } from "@mui/material";
// import { FlatTree } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";




// export default function GameModeSelection({ onSelectMode }) {
//   const navigate = useNavigate();
//   return (
//     <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0 }}
//   transition={{ duration: 0.5 }}
// >

//     <Box
//       sx={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         //background: "linear-gradient(to bottom right, #8e44ad, #3498db)",
//       }}
//     >
//       <Card sx={{ minWidth: 300, minHeight: 800, borderRadius: 3, boxShadow: 5, padding: 3 }}>
//         <CardContent>
//           <Typography variant="h5" component="div" gutterBottom align="center">
//             בחר סוג משחק
//           </Typography>
//           <Stack spacing={2}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => navigate("bot-game")}
//               sx={{
//                 borderRadius: 2,
//                 transition: "0.2s",
//                 "&:hover": {
//                   backgroundColor: "rgba(59, 130, 246, 0.8)", // אפקט הבהרה
//                   transform: "scale(1.05)",
//                 },
//                 "&:active": {
//                   transform: "scale(0.95)",
//                 },
//               }}
//             >
//               משחק מול בוט
//             </Button>
//             <Button
//               variant="contained"
//               color="secondary"
//               onClick={() => navigate("/online-game")}
//               sx={{
//                 borderRadius: 2,
//                 transition: "0.2s",
//                 "&:hover": {
//                   backgroundColor: "rgba(220, 53, 69, 0.8)",
//                   transform: "scale(1.05)",
//                 },
//                 "&:active": {
//                   transform: "scale(0.95)",
//                 },
//               }}
//             >
//               משחק מול שחקן ברשת
//             </Button>
//             <Button
//               variant="contained"
//               color="success"
//               onClick={() => navigate("/color-selection")}
//               sx={{
//                 borderRadius: 2,
//                 transition: "0.2s",
//                 "&:hover": {
//                   backgroundColor: "rgba(40, 167, 69, 0.8)",
//                   transform: "scale(1.05)",
//                 },
//                 "&:active": {
//                   transform: "scale(0.10)",
//                 },
//               }}
//             >
//               משחק מול שחקן לוקאלי
//             </Button>
//           </Stack>
//         </CardContent>
//       </Card>
//     </Box>
//     </motion.div>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../App.css"; // חיבור לקובץ העיצוב הכללי

// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="page-container">
//       <div className="content-box">
//         <h1 className="text-2xl font-bold mb-4">בחר מצב משחק</h1>
//         <button className="game-button" onClick={() => navigate("/color-selection?mode=bot")}>
//           משחק נגד בוט
//         </button>
//         <button className="game-button green" onClick={() => navigate("/color-selection?mode=online")}>
//           משחק גלובלי מול שחקן ברשת
//         </button>
//         <button className="game-button red" onClick={() => navigate("/color-selection?mode=local")}>
//           משחק לוקאלי מול שחקן מקומי
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css'; // יצירת קובץ CSS לעיצוב

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>דמקה סינית</h1>
//       <div className="buttons-container">
//         <Link to="/color-selection" state={{ mode: 'local' }} className="home-button">משחק לוקאלי</Link>
//         <Link to="/online-game" className="home-button">משחק אונליין</Link>
//         <Link to="/bot-game" className="home-button">משחק נגד בוטים</Link>
//       </div>
//     </div>
//   );
// }

// export default Home;