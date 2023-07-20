"use client";

import { FormEvent } from "react";

const Page = () => {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Enviado!");
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl mb-4">Google</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          required
          type="text"
          className="px-2 text-gray-800"
          placeholder="Digite algo"
        />
        <input
          type="submit"
          value="Pesquisar"
          className="cursor-pointer bg-gray-500 px-2"
        />
      </form>
    </div>
  );
};

export default Page;
