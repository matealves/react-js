import { useCount } from "./hooks/count";

const App = () => {
  const [contagem, contagemDispatch] = useCount();

  return (
    <div className="p-5">
      Contagem: {contagem.count}
      <hr />
      <button
        className="px-5 bg-green-200"
        onClick={() => contagemDispatch({ type: "ADD" })}
      >
        +
      </button>
      <button
        className="px-5 bg-red-200"
        onClick={() => contagemDispatch({ type: "DEL" })}
      >
        -
      </button>
      <button
        className="px-5 bg-blue-200"
        onClick={() => contagemDispatch({ type: "RESET" })}
      >
        reset
      </button>
    </div>
  );
};

export default App;
