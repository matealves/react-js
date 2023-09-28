import { LoggedUserContext } from "@/contexts/LoggedUser";
import { useContext } from "react";

export const Header = () => {
  const loggedUserCtx = useContext(LoggedUserContext);

  const handleLogout = () => {
    loggedUserCtx?.setName("");
  };

  return (
    <header>
      <h1 className="text-3xl my-4 font-bold">Título da Página</h1>
      {loggedUserCtx?.name && (
        <>
          <p>Usuário online: {loggedUserCtx?.name}</p>
          <button onClick={handleLogout}>Sair</button>
        </>
      )}
      {!loggedUserCtx || (!loggedUserCtx.name && <p>Usuário offline</p>)}
    </header>
  );
};
