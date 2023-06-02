import { useState, ChangeEvent } from "react";

type Props = {
  onAdd: (title: string, body: string) => void;
};

export const PostForm = ({ onAdd }: Props) => {
  const [addTitleText, setAddTitleText] = useState("");
  const [addBodyText, setAddBodyText] = useState("");

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
  };

  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value);
  };

  const handleAddClick = async () => {
    if (!addTitleText || !addBodyText) {
      alert("preencha todos os campos.");
      return;
    }

    onAdd(addTitleText, addBodyText);
  };

  return (
    <fieldset className="border-2 mb-4 p-4">
      <legend className="px-3 text-gray-400">Adicionar novo post</legend>

      <input
        value={addTitleText}
        onChange={handleAddTitleChange}
        type="text"
        className="px-3 py-2 block border mb-2 w-full text-sm"
        placeholder="Digite um título"
      />
      <textarea
        value={addBodyText}
        onChange={handleAddBodyChange}
        className="block border p-2 mb-2 w-full text-sm"
      ></textarea>

      <button
        className="text-center block bg-blue-400 rounded py-1 px-3 text-white w-28"
        onClick={handleAddClick}
      >
        Adicionar
      </button>
    </fieldset>
  );
};
