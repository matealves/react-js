"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [name, setName] = useState("Mateus");
  const [age, setAge] = useState(24);
  /*
1. Definição da função que vai rodar.
2. Definição de QUANDO vai rodar.
3. Definição do que vai fazer quando o componente sumir/unload/CleanUp.

2º parâmetro = []: passar states a serem monitoradas para rodar o effect
Ou array vazio para rodar apenas ao iniciar a página
*/
  useEffect(() => {
    console.log("RODOU O EFFECT...");
  }, [name]);

  const msg = name + ", " + age + " anos.";

  return (
    <div className="w-screen text-center text-xl mt-10">
      <p>{msg}</p>
      <hr />
      <button
        onClick={() => setName("Mateus")}
        className="bg-blue-600 p-2 m-1 rounded text-sm"
      >
        Mateus
      </button>
      <button
        onClick={() => setName("Alves")}
        className="bg-blue-600 p-2 m-1 rounded text-sm"
      >
        Alves
      </button>
      <button
        onClick={() => setAge(24)}
        className="bg-red-600 p-2 m-1 rounded text-sm"
      >
        24
      </button>
      <button
        onClick={() => setAge(25)}
        className="bg-red-600 p-2 m-1 rounded text-sm"
      >
        25
      </button>
    </div>
  );
};

export default Page;
