type Props = {
  name: string;
  avatar?: string;
  roles: string[];
};

// valor padrão em "avatar", caso nãos seja passado

export const Person = ({
  name,
  avatar = "https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg",
  roles,
}: Props) => {
  return (
    <>
      <h1 className="w-52 h-15 bg-white text-black my-4 text-center font-bold">
        {name}
      </h1>
      <img className="w-40" src={avatar} alt={name} />
      <p className="m-2 text-sm">- {roles[0]}</p>
    </>
  );
};
