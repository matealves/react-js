import { Person } from "./components/Person";

function App() {
  const list: { name: string; age: number }[] = [
    { name: "Mateus", age: 23 },
    { name: "Roane", age: 24 },
    { name: "Gabriel", age: 27 },
    { name: "Thais", age: 25 },
  ];

  // return (
  //   <>
  //     <h2 style={{ textAlign: "center" }}>Lista</h2>
  //     <ul>
  //       {list.map(({ name, age }, index) => (
  //         <li key={index}>
  //           {name} - {age} anos.
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Lista</h2>
      <ul>
        {list.map((item, index) => (
          <Person key={index} data={item} />
        ))}
      </ul>
    </>
  );
}

export default App;
