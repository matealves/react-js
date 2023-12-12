"use client";

import { useEffect, useState } from "react";

const Page = () => {
const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => console.log("data:", data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center mt-6 font-bold">Lista de usuários</h1>
    </div>
  );
};

export default Page;
