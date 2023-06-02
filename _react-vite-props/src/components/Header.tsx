// Props (propriedade) são o que seria os atributos do HTML
type Props = {
  title?: string;
};

// Exemplo 1
// export const Header = (props: Props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//       <hr />
//     </header>
//   );
// };

// Exemplo 2 - destructuring objeto props
export const Header = ({ title }: Props) => {
  return (
    <header>
      <h1>{title}</h1>
      <hr />
    </header>
  );
};
