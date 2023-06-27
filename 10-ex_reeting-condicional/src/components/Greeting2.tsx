export const Greeting2 = () => {
  const date = new Date();
  const getHour = date.getHours();
  const getMinute = date.getMinutes();

  const getFullTime = () => {
    return `${getHour < 10 ? "0" + getHour : getHour}:${
      getMinute < 10 ? "0" + getMinute : getMinute
    }`;
  };

  return (
    <div className="block">
      <h1 className="font-bold text-6xl">{getFullTime()}</h1>
      <span className="font-bold text-2xl">
        {getHour > 4 && getHour < 12 && "Bom dia ☀️"}
        {getHour > 11 && getHour < 18 && "Boa tarde 🌥️"}
        {(getHour < 5 && "Boa noite 🌙") || (getHour > 17 && "Boa noite 🌙")}
      </span>
    </div>
  );
};
