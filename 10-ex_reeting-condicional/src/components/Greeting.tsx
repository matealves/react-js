import { ReactNode } from "react";

export const Greeting = () => {
  const getCurrentTime = () => {
    const date = new Date();
    const getHour = date.getHours();
    const getMinute = date.getMinutes();

    

    return `${getHour < 10 ? "0" + getHour : getHour}:${
      getMinute < 10 ? "0" + getMinute : getMinute
    }`;
  };

  return (
    <div className="block">
      <h1 className="font-bold text-6xl">{getCurrentTime()}</h1>
      <span className="font-bold text-2xl">Boa noite 🌙</span>
      {/* <span className="font-bold">Boa tarde 🌥️</span>
      <span className="font-bold">Bom dia ☀️</span> */}
    </div>
  );
};
