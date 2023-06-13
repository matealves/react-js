import { Button } from "./components/Button";

function App() {
  const textButton = "Saiba mais";

  const handleClick = (txt: string) => {
    alert("Click! " + txt);
  };

  return (
    <>
      <Button text={textButton} click={handleClick} />
    </>
  );
}

export default App;
