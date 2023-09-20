import { OnlineUsers } from "./OnlineUsers";

export const Header = () => {
  return (
    <header>
      <h1 className="text-3xl my-4 font-bold">PlayStation 4</h1>
      <OnlineUsers />
    </header>
  );
};
