import { useState } from "react";

export const ShowToken = () => {
  const [showToken, setshowToken] = useState(false);

  const handleClickButton = () => {
    setshowToken(!showToken);
  };

  return (
    <div className="block mb-5 w-screen text-center h-20">
      <button
        onClick={handleClickButton}
        className="bg-gray-500 p-3 rounded-md"
      >
        {showToken ? "Ocultar token" : "Exibir token"}
      </button>
      {showToken && <div className="p-3 mt-1">y@cKIU%N&I6kp#Vj9</div>}
    </div>
  );
};
