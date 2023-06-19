import { Person } from "@/components/Person";

const Page = () => {
  return (
    <>
      <Person
        name="Mark Zuckerberg"
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
        roles={["CEO do Facebook", "CEO do WhatsApp", "CEO do Instagram"]}
      />
      <Person
        name="Elon Musk"
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/452px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
        roles={["CEO da Tesla", "CEO da SpaceX", "CEO do Twitter"]}
      />
      <Person name="Teste" roles={["CEO da Coca-COla"]} />
    </>
  );
};

export default Page;
