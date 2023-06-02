import { useState, useEffect } from "react";
import { Movie } from "./types/Movie";

const App = () => {
  const url = "https://api.b7web.com.br/cinema/";
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMovies();
  }, []);

  // const loadMovies = async () => {
  //   setLoading(true);
  //   await fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       setLoading(false);
  //       setMovies(json);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       setMovies([]);
  //       console.log(error);
  //     });
  // };

  const loadMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setLoading(false);
      setMovies(json);
    } catch (error) {
      setLoading(false);
      setMovies([]);
      console.log(error);
    }
  };

  return (
    <div className="p-10">
      {loading && <div className="text-center mt-20">Carregando...</div>}

      {!loading && movies.length > 0 && (
        <>
          <p className="block mb-5">Filmes em cartaz: {movies.length}</p>
          <div className="grid grid-cols-6 gap-6 text-center">
            {movies.map((item, index) => (
              <div key={index} className="">
                <img src={item.avatar} className="w-64 block" />
                {item.titulo}
              </div>
            ))}
          </div>
        </>
      )}

      {!loading && movies.length === 0 && (
        <p className="block pt-10 text-center">
          Erro ao carregar filmes, tente novamente mais tarde.
        </p>
      )}
    </div>
  );
};

export default App;
