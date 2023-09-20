import { useContext } from "react";
import { OnlineUsers } from "./OnlineUsers";
import { CountContext } from "@/contexts/CountContext";

export const Header = () => {
  const counterCtx = useContext(CountContext);
  return (
    <header>
      <h1 className="text-3xl my-4 font-bold">
        PlayStation 4 ({counterCtx?.onlineCount})
      </h1>
      <OnlineUsers />
    </header>
  );
};
