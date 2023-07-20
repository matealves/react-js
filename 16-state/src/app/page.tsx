"use client";
import { ShowToken } from "@/components/ShowToken";
import { Count } from "@/components/Count";
import { InputText } from "@/components/InputText";

const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <ShowToken />
      <Count />
      <InputText />
    </div>
  );
};

export default Page;
