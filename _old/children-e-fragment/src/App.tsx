import { Header } from "./components/Header";
import { Photo } from "./components/Photo";

const url: string =
  "https://www.google.com/logos/doodles/2021/thank-you-public-health-workers-and-researchers-in-the-scientific-community-6753651837109269-2xa.gif";

function App() {
  return (
    <>
      <Header title="Título Exemplo" />
      Olá Mundo!
      {/* <Photo url={url} legend="Google" /> */}
      <Photo legend="Google">
        <img className="imagem" src={url} alt="Logo Google" />
      </Photo>
    </>
  );
}

export default App;
