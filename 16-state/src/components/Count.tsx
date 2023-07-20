import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  const handleClickButtonSum = () => {
    setCount(count + 1);
  };
  const handleClickButtonMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="block w-screen text-center">
      <hr />
      <p className="pb-2 m-3">{count}</p>
      <button
        onClick={handleClickButtonMinus}
        className="bg-blue-500 p-3 rounded-md"
      >
        -
      </button>
      <button
        onClick={handleClickButtonSum}
        className="bg-blue-500 p-3 rounded-md mx-1"
      >
        +
      </button>
    </div>
  );
};
