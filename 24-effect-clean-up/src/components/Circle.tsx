import { useEffect } from "react";

export const Circle = () => {
  useEffect(() => {
    console.log("CONECTADO");

    return () => {
      console.log("OFFLINE (CLEANUP)");
    };
  });

  return (
    <>
      <div className="w-10 h-10 rounded-full bg-green-400"></div>Online
    </>
  );
};
