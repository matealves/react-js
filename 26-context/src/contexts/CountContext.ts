import { createContext } from "react";

type CountContextType = {
  onlineCount: number;
  setOnlineCount(value: number): void;
};
export const CountContext = createContext<CountContextType | null>(null);
