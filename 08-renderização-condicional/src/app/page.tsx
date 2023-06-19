import { Card } from "@/components/Card";

const Page = () => {
  // Para passar mais de um componente como children
  // Tem a mesma regra do 'Fragment' ou 'div' no return
  return (
    <div>
      <Card
        phrase="As vezes é preciso aprender a correr antes de começar a andar."
        author="Tony Stark"
      />
    </div>
  );
};

export default Page;
