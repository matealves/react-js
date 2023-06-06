import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="p-4">
      <header>
        <h1 className="pb-4">Logo</h1>
      </header>
      <hr />
      Dashboard - <Link to="/sobre">Financeiro</Link>
      <hr />
      <footer className="pt-10">© Todos os Direitos Reservados</footer>
    </div>
  );
};
