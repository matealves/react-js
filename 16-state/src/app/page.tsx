"use client";
import { ShowToken } from "@/components/ShowToken";
import { Count } from "@/components/Count";

const Page = () => {

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <ShowToken />
      <Count />
    </div>
  );
};

export default Page;
