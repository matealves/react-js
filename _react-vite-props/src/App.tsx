import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header title="Este é um exemplo" />
      <Header title="Outro texto" />
      <Header />
      Olá Mundo!
    </div>
  );
};

export default App;
