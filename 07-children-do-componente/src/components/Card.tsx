import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div className="w-96 m-4 border-2 border-white text-center p-2">
      {children}
    </div>
  );
};
