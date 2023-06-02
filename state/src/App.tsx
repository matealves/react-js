import React, { useState } from "react";
import "./App.css";

// function App() {
//   const [n, setN] = useState(0);

//   const handleMinus = () => {
//     n <= 0 ? "" : setN(n - 1);
//   };
//   const handleMore = () => {
//     n >= 10 ? "" : setN(n + 1);
//   };

//   return (
//     <>
//       <p>Contador de 0 a 10.</p>
//       <div className="container">
//         <button onClick={handleMinus}>-</button>
//         <div className="res">{n}</div>
//         <button onClick={handleMore}>+</button>
//       </div>
//     </>
//   );
// }

function App() {
  const [name, setName] = useState("");

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  return (
    <>
      Nome: <input type="text" value={name} onChange={handleInput} />
      <hr />
      Seu nome é {name}
    </>
  );
}

export default App;
