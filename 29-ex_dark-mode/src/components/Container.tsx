import { ReactNode } from "react";
import { useTheme } from "@/contexts/ThemeContext";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  const themeCtx = useTheme();

  console.log("themeCtx", themeCtx);

  return (
    <div
      className={`w-full h-screen 
    ${themeCtx?.theme === "dark" ? "bg-black" : "bg-white text-black"}`}
    >
      <div className="container mx-auto py-5"> {children}</div>
    </div>
  );
};
