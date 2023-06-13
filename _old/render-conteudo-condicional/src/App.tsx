import { useState } from "react";

function App() {
  const [opacity, setOpacity] = useState(0);

  const handleClick = () => {
    opacity === 0 ? setOpacity(1) : setOpacity(0);
  };

  return (
    <>
      <button onClick={handleClick}>
        {opacity === 1 ? "Ocultar" : "Exibir"}
      </button>

      <div style={{ opacity: opacity }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos in
        architecto, nisi beatae debitis a nam ratione sunt fuga reiciendis
        repudiandae dolore quis sit praesentium voluptatem sint laboriosam
        necessitatibus ullam.
      </div>
    </>
  );
}

export default App;

// function App() {
//   const [show, setShow] = useState(false);

//   const handleClick = () => {
//     setShow(!show); // Toggle
//   };

//   return (
//     <>
//       <button onClick={handleClick}> {show ? "Ocultar" : "Exibir"} </button>

//       {show && (
//         <div className="text">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos in
//           architecto, nisi beatae debitis a nam ratione sunt fuga reiciendis
//           repudiandae dolore quis sit praesentium voluptatem sint laboriosam
//           necessitatibus ullam.
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
