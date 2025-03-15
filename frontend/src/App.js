import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api") // จะเชื่อมกับ Backend ทีหลัง
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Error fetching API"));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🚀 React + Node.js Fullstack App</h1>
      <h2>สวัสดีครับเพื่อนๆ ยูฮูวววว</h2>
      <h3>Backend Response: {message}</h3>
    </div>
  );
}

export default App;
