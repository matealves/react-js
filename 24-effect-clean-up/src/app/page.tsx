"use client";

import { Circle } from "@/components/Circle";
import { useEffect, useState } from "react";

const Page = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <button
        onClick={() => setShow(!show)}
        className="bg-blue-600 p-2 m-3 rounded-md"
      >
        {show ? "Logout" : "Login"}
      </button>

      {show ? <Circle /> : ""}
    </div>
  );
};

export default Page;
