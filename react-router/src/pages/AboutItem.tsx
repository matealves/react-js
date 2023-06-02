import { useParams, useNavigate } from "react-router-dom";

export const AboutItem = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleHomeButton = () => {
    navigate("/");
  };

  return (
    <div className="p-4">
      <header>
        <h1 className="pb-4">Logo</h1>
      </header>
      <hr />
      Página sobre {params.slug}
      <hr />
      <button
        className="bg-gray-400 text-white p-1 rounded mr-3"
        onClick={handleHomeButton}
      >
        Home
      </button>
      <button
        className="bg-blue-400 text-white p-1 rounded mt-4"
        onClick={handleBackButton}
      >
        Voltar
      </button>
      <footer className="pt-10">© Todos os Direitos Reservados</footer>
    </div>
  );
};
