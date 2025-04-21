// console.log("🔌 מתחברת למונגו...");
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors()); // מאפשר חיבור מ-React

// // חיבור למונגו
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log("✅ חיבור למונגו הצליח!");
//   process.exit(0); // סוגר את התהליך
// }).catch(err => {
//   console.error("❌ שגיאה בחיבור למונגו:", err);
//   process.exit(1); // סוגר עם קוד שגיאה
// });

// // יצירת API שמקבל נתונים ושומר אותם
// app.post('/save-data', async (req, res) => {
//   const { name, code,success_rate } = req.body;

//   const Player = mongoose.model('players', new mongoose.Schema({ name: String, code: String,success_rate: Number}));
//   const newPlayer = new Player({ name, code, success_rate });

//   await newPlayer.save();
//   res.json({ message: '✅ Data saved successfully' });
// });

// app.listen(5000, () => console.log('🚀 Server running on port 5000'));


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // מתיר חיבור מהקליינט

// חיבור למונגוDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ מחובר למונגוDB"))
.catch(err => console.error("❌ שגיאה בחיבור למונגו:", err));

// יצירת סכמת הנתונים
const playerSchema = new mongoose.Schema({
  name: String,
  code: String,
  success_rate: Number,
});

const Player = mongoose.model("Player", playerSchema,"players");

// נתיב POST להוספת נתונים
app.post("/api/newPlayer", async (req, res) => {
  try {
    const { name, code, success_rate } = req.body;
    const newPlayer = new Player({ name, code, success_rate });
    await newPlayer.save();
    res.status(201).json({ message: "✅ נתונים נשמרו בהצלחה!" });
  } catch (error) {
    res.status(500).json({ message: "❌ שגיאה בשמירה!", error });
  }
});
// נתיב GET לשליפת כל השחקנים ממונגוDB
app.get("/api/getPlayers", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: "❌ שגיאה בשליפת הנתונים!", error });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 השרת רץ על http://localhost:${PORT}`));
