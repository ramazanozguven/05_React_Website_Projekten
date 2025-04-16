import  { useState } from "react";
import "./App.css";

function App() {
  const [hex, setHex] = useState("#ffffff");

  function randomHex() {
    const randomhex = "#" + Math.floor(Math.random() * 16777721).toString(16);
    setHex(randomhex);
  }

  return (
    <div className="App" style={{ backgroundColor: `${hex}` }}>
      <h1>{hex}</h1>
      <button onClick={randomHex}>Klicken für neuen Hintergrund</button>
      <button onClick={() => navigator.clipboard.writeText(hex)}>
        Kopieren Sie den Hexadezimalwert
      </button>
    </div>
  );
}

export default App;
