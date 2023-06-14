import Square from "./Square";
import { Teste } from "./Teste";

export const DuoComp = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold m-4">Unindo componentes</h3>

      <Teste />
      <Square />
    </div>
  );
};
