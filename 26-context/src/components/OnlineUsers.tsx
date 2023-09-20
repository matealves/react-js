import { CountContext } from "@/contexts/CountContext";
import { useContext } from "react";

export const OnlineUsers = () => {
  const countCtx = useContext(CountContext);

  const handleBanAll = () => {
    countCtx?.setOnlineCount(0);
  };

  return (
    <>
      <p>Amigos online: {countCtx?.onlineCount}</p>
      <button
        className="bg-blue-500 p-2 mt-2 rounded-md text-sm"
        onClick={handleBanAll}
      >
        Zerar amigos
      </button>
    </>
  );
};
