"use client";

import { Header } from "@/components/Header";
import { CountContext } from "@/contexts/CountContext";
import { useState } from "react";

const Page = () => {
const [onlineCount, setOnlineCount] = useState(4)

  return (
    <div className="container mx-auto">
      <CountContext.Provider value={{onlineCount, setOnlineCount}}>
        <Header />
      </CountContext.Provider>
    </div>
  );
};

export default Page;
