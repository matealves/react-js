import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  const handleClickButtonSum = () => {
    setCount(count + 1);
    setCount((c) => c + 1);
  };
  const handleClickButtonMinus = () => {
    setCount(count - 1);
    setCount((c) => c - 1);
  };

  return (
    <div className="block w-screen text-center">
      <p className="pb-2 m-3">{count}</p>
      <button
        onClick={handleClickButtonMinus}
        className="bg-red-500 p-3 rounded-md"
      >
        -2
      </button>
      <button
        onClick={handleClickButtonSum}
        className="bg-blue-500 p-3 rounded-md mx-1"
      >
        +2
      </button>
    </div>
  );
};
