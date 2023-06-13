import React, { useState } from "react";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const App = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  function handleInputName(e: InputChangeEvent) {
    setName(e.target.value);
  }
  function handleInputLastName(e: InputChangeEvent) {
    setLastName(e.target.value);
  }
  function handleInputAge(e: InputChangeEvent) {
    setAge(e.target.value);
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleInputName} />
      </div>
      <div>
        Sobrenome:
        <input type="text" value={lastName} onChange={handleInputLastName} />
      </div>
      <div>
        Idade:
        <input type="number" value={age} onChange={handleInputAge} />
      </div>
      <hr />
      Olá {name} {lastName}, tudo bem?
      <br />
      Você tem {age} anos.
    </div>
  );
};

export default App;
