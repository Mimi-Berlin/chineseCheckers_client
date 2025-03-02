import logo from './logo.svg';
import './App.css';
import Board from './Game_components/Board';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Board/>
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [status, setStatus] = useState("Not connected");
//   const [socket, setSocket] = useState(null);
//   const [message, setMessage] = useState("");

//   const connectToServer = () => {
//     const ws = new WebSocket("ws://localhost:9000");

//     ws.onopen = () => {
//       setStatus("Connected to server");
//       ws.send(name);
//     };

//     ws.onmessage = (event) => {
//       console.log("Server response:", event.data);
//       setStatus(event.data);
//     };

//     ws.onerror = (error) => {
//       console.error("WebSocket error:", error);
//       setStatus("Connection failed");
//     };

//     ws.onclose = () => {
//       setStatus("Disconnected");
//     };

//     setSocket(ws);
//   };

//   const sendMessage = () => {
//     if (socket) {
//       socket.send(message);
//       setMessage("");
//     }
//   };

//   return (
//     <div>
//       <h1>Chinese Checkers Login</h1>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={connectToServer}>Connect</button>
//       <p>Status: {status}</p>

//       {socket && (
//         <div>
//           <input
//             type="text"
//             placeholder="Enter message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <button onClick={sendMessage}>Send</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
