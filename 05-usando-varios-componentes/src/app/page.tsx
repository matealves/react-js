import { DuoComp } from "@/components/DuoComp";
import { Person } from "@/components/Person";

const Page = () => {
  // Retorno root deve ser um único comp
  return (
    //utilizar "div" única
    // <div>
    //   <h1 className="m-4 font-bold text-2xl">Hello Word</h1>
    //   <p className="m-4">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis
    //     ex, saepe ab ipsa reprehenderit distinctio optio, similique mollitia
    //     natus, quidem excepturi dolor molestias aliquam placeat numquam et
    //     sapiente provident.
    //   </p>
    //   <DuoComp />
    // </div>

    // Ou utilizar "Fragment"
    // renderiza filhos sem 'comp' pai
    <>
      <Person />
    </>
  );
};

export default Page;
