import { useState } from "react";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [success_rate, setSuccess_rate] = useState("");
  const [players, setPlayers] = useState([]); // שמירת הנתונים שנשלפים

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, code, success_rate};

    try {
      const response = await fetch("http://localhost:5000/api/newPlayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("✅ תגובת השרת:", result);
      alert("הנתונים נשלחו בהצלחה!");
    } catch (error) {
      console.error("❌ שגיאה בשליחה:", error);
      alert("שגיאה בשליחת הנתונים!");
    }
  };

  const fetchPlayers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getPlayers");
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      console.error("❌ שגיאה בשליפת הנתונים:", error);
      alert("שגיאה בשליפת הנתונים!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>שם:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>קוד:</label>
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} required />

        <label>Success Rate:</label>
        <input type="number" value={success_rate} onChange={(e) => setSuccess_rate(e.target.value)} required />

        <button type="submit">שלח</button>
      </form>

      <button onClick={fetchPlayers}>📋 הצגת שחקנים</button>

      {players.length > 0 && (
        <ul>
          {players.map((player) => (
            <li key={player._id}>{player.name} - {player.code} - {player.success_rate}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormComponent;
