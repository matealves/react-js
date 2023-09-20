"use client";

import { Header } from "@/components/Header";
import { CountContext, countInitialData } from "@/contexts/CountContext";

const Page = () => {
  return (
    <div className="container mx-auto">
      <CountContext.Provider value={countInitialData}>
        <Header />
      </CountContext.Provider>
    </div>
  );
};

export default Page;
