import { useState } from "react";

export const InputText = () => {
  const [nameInput, setNameInput] = useState("");
  const [showText, setShowText] = useState(false);

  const handleClickButton = () => {
    setShowText(true);
  };

  return (
    <div className="block mb-5 w-screen text-center mt-5 h-20">
      <hr />
      <input
        type="text"
        className="mt-5 text-gray-800 p-1 rounded"
        placeholder="Digite algum texto"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button
        className="bg-pink-500 p-1 rounded-md ml-2"
        onClick={handleClickButton}
      >
        Exibir texto
      </button>
      {showText && <div className="p-3 mt-1">{nameInput}</div>}
    </div>
  );
};
