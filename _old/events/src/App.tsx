function App() {
  function handleButtonClick() {
    alert("Button clicked");
  }

  return (
    <div>
      <button onClick={handleButtonClick}> Alerta! </button>
      <hr />
      {/* <button
        onClick={() => {
          alert("Clicou");
        }}
      >
        Alerta2
      </button> */}
    </div>
  );
}

export default App;
