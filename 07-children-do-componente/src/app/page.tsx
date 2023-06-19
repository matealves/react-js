import { Card } from "@/components/Card";

const Page = () => {
  // Para passar mais de um componente como children
  // Tem a mesma regra do 'Fragment' ou 'div' no return
  return (
    <div>
      <Card>
        <>
          <h3 className="text-3xl font-bold italic">"Frase de Efeito"</h3>
          <p className="text-right text-sm">Autor desconhecido</p>
        </>
      </Card>
    </div>
  );
};

export default Page;
