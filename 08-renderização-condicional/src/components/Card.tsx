import { ReactNode } from "react";

type Props = {
  phrase: string;
  author?: string;
};

export const Card = ({ phrase, author }: Props) => {
  return (
    <div className="w-96 m-4 border-2 border-white text-center p-2">
      <h3 className="text-2xl font-bold italic">"{phrase}"</h3>
      <p className="text-right text-sm">- {author ?? "Autor Desconhecido"}</p>
    </div>
  );
};
