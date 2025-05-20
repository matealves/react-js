"use client";

import { User } from "@/types/User";
import { useEffect, useRef, useState } from "react";

const Page = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const urlPost = "https://jsonplaceholder.typicode.com/posts";
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    // try {
    //   const reponse = await fetch(url);
    //   const data = await reponse.json();
    //   setUsers(data);
    //   setLoading(false);
    // } catch (err) {
    //   console.error("ERRO", err);
    // }
    // setLoading(false);
  };

  const handleAddPost = async () => {
    const res = await fetch(urlPost, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        title: "Teste novo post",
        body: "Enviando novo POST de teste para o server...",
      }),
    });

    return res.json();
  };

  useEffect(() => {
    getUsers();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch(() => {
        console.error("ERRO");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <button onClick={handleAddPost} className="hidden p-2 rounded-md bg-blue-500">
        Enviar post
      </button>
      <h1 className="text-2xl w-screen block text-center mt-6 font-bold mb-4">
        Lista de usuários
      </h1>
      {loading && (
        <h1 className="text-1xl w-screen block text-center mt-6 font-bold mb-4">
          Carregando...
        </h1>
      )}
      {!loading && users.length > 0 && (
        <ul className="flex w-screen flex-wrap justify-center items-center px-6">
          {users.map(({ id, name, email, address }) => (
            <li className="m-3 text-sm w-72 border p-2" key={id}>
              <p>ID: {id}</p>
              <p>Nome: {name}</p>
              <p>E-mail: {email}</p>
              <p>Cidade: {address.city}</p>
            </li>
          ))}
        </ul>
      )}
      {!loading && !users.length && (
        <h1 className="text-1xl w-screen block text-center mt-6 font-bold mb-4">
          Não há usuários para exibir...
        </h1>
      )}
    </div>
  );
};

// const Page = () => {
//   const [legendInput, setLegendInput] = useState("");
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileSend = async () => {
//     const files = fileInputRef.current?.files;

//     if (files && files.length > 0) {
//       const fileItem = files[0];
//       const allowed = ["image/jpg", "image/jpeg", "image/png"];

//       if (allowed.includes(fileItem.type)) {
//         const data = new FormData();
//         data.append("image", fileItem);
//         data.append("legend", legendInput);

//         const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//           method: "POST",
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           body: data,
//         });

//         const json = await res.json();
//         console.log("json", json);
//       } else {
//         alert("Arquivo com formato inválido inválido.");
//       }
//     } else {
//       alert("Selecione um arquivo.");
//     }
//   };

//   return (
//     <div className="container mx-auto flex flex-col items-center">
//       <h1 className="text-center text-xl mt-6 mb-2 font-bold">
//         Upload de Imagem{" "}
//       </h1>
//       <p className="text-center ">jpg, jpeg ou png</p>

//       <div className="flex flex-col gap-3 max-w-sm border border-dotted border-white p-3 mt-8">
//         {" "}
//         <input type="file" ref={fileInputRef} className="" />
//         <input
//           type="text"
//           placeholder="Digite uma legenda"
//           className="p-3 rounded text-black"
//           value={legendInput}
//           onChange={(e) => setLegendInput(e.target.value)}
//         />
//         <button className="" onClick={handleFileSend}>
//           Enviar
//         </button>
//       </div>
//     </div>
//   );
// };

export default Page;
