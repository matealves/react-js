type Props = {
  text: string;
  click: (txt: string) => void;
};

// export const Button = ({ text, click }: Props) => {
//   return <button onClick={click}>{text}</button>;
// };

export const Button = ({ text, click }: Props) => {
  const handleCilck = () => {
    click("TEXTO COMO PARÂMETRO");
  };

  return <button onClick={handleCilck}>{text}</button>;
};
