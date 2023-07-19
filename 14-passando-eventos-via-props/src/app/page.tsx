"use client";

import { CustomButton } from "@/components/CustomButton";

const Page = () => {
  const handleButton1 = () => alert("Saiba mais...");
  const handleButton2 = () => alert("Compra efetuada!");

  // funções de eventos passadas como Props
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <CustomButton label="Saiba mais" eventClick={handleButton1} />
      <CustomButton label="Comprar" eventClick={handleButton2} />
    </div>
  );
};

export default Page;
