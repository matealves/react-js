const getDay = () => {
  return new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(
    new Date()
  );
};

export const Person = () => {
  const data = {
    name: "Elon Musk",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/452px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
  };

  // console.log(getDay());

  return (
    <>
      <h1 className="w-52 h-15 bg-white text-black my-4 text-center font-bold">
        {data.name}
      </h1>
      <img src={data.avatar} alt={data.name} />
    </>
  );
};
