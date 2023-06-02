import { useState, useEffect, ChangeEvent } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${name} ${lastName}`);
  }, [name, lastName]);

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={name}
        placeholder="Nome"
        onChange={handleName}
      />
      <input
        type="text"
        value={lastName}
        placeholder="Sobrenome"
        onChange={handleLastName}
      />
      <p>Nome completo: {fullName} </p>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';

// function Example() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   }, []);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default Example;
