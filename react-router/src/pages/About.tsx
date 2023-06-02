import { Link, useSearchParams } from "react-router-dom";

export const About = () => {
  const [SearchParams, setSearchParams] = useSearchParams();

  const setOrder = (order: "asc" | "desc") => {
    SearchParams.set("order", order);
    setSearchParams(SearchParams);
  };

  return (
    <div className="p-4">
      <header>
        <h1 className="pb-4">Logo</h1>
      </header>
      <hr />
      Filtro: {SearchParams.get("filter")} <br />
      Ordem: {SearchParams.get("order")}
      <hr />
      <button
        className="bg-gray-400 text-white p-1 rounded mr-3"
        onClick={() => setOrder("asc")}
      >
        asc
      </button>
      <button
        className="bg-gray-400 text-white p-1 rounded mr-3"
        onClick={() => setOrder("desc")}
      >
        desc
      </button>
      <br />
      <br />
      Página Sobre:
      <ul>
        <li className="pl-2 pt-2 underline text-blue-500">
          <Link to="/sobre/mateus">Mateus Alves</Link>
        </li>
        <li className="p-2 underline text-blue-500">
          <Link to="/sobre/gabriel">Gabriel Alves</Link>
        </li>
      </ul>
      <hr />
      <footer className="pt-10">© Todos os Direitos Reservados</footer>
    </div>
  );
};
