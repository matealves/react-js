// import { Container } from "./components/Container";
// import { Button } from "./components/Button";

import * as C from "./AppStyles";

function App() {
  return (
    <>
      {/* <Container>
        Styled Components
      <Button>Saiba mais</Button>
      </Container> */}

      <C.Container>
        <span>Styled Components</span>
        <a href="" className="link">
          Link
        </a>

        <C.Button>Voltar</C.Button>
        <C.Button pay="#008800">Pagar</C.Button>
        <C.Button cancel>Cancelar</C.Button>
        <br></br>

        <C.Button2>Normal Button</C.Button2>
        <C.Button2 primary>Primary Button</C.Button2>
      </C.Container>
    </>
  );
}

export default App;
