import Square, { Teste } from "@/components/Square";

const Page = () => {
  return (
    <div>
      <h1 className="m-4 font-bold text-2xl">Hello Word</h1>
      <p className="m-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis
        ex, saepe ab ipsa reprehenderit distinctio optio, similique mollitia
        natus, quidem excepturi dolor molestias aliquam placeat numquam et
        sapiente provident.
      </p>
      <Teste />
      <Square />
    </div>
  );
};

export default Page;
