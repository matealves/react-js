export const Greeting = () => {
  const hour = new Date().getHours();
  let message;

  const fullTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
    hour12: false,
  }).format();

  if (hour > 4 && hour < 12) {
    message = "Bom dia ☀️";
  } else if (hour >= 12 && hour < 18) {
    message = "Boa tarde 🌥️";
  } else if (hour >= 18 || hour <= 4) {
    message = "Boa noite 🌙";
  }

  return (
    <div className="block">
      <h1 className="font-bold text-6xl">{fullTime}</h1>
      <span className="font-bold text-2xl">{message}</span>
    </div>
  );
};
