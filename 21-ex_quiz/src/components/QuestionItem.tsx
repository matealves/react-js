import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selecterAnswer, setSelecterAnswer] = useState<number | null>(null);

  const checkQuesntion = (key: number) => {
    if (selecterAnswer === null) {
      setSelecterAnswer(key);
      onAnswer(key);
    }
  };

  return (
    <div className="">
      <div className="text-2xl font-bold mb-5">
        {count}. {question.question}
      </div>
      <div>
        {question.options.map((option, key) => (
          <div
            key={key}
            onClick={() => checkQuesntion(key)}
            className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 border-blue-300 hover:opacity-60
            ${selecterAnswer !== null && "cursor-auto hover:opacity-100"}
            ${
              selecterAnswer !== null &&
              selecterAnswer === question.answer &&
              selecterAnswer === key &&
              "bg-green-100 border-green-300"
            }
            ${
              selecterAnswer !== null &&
              selecterAnswer !== question.answer &&
              selecterAnswer === key &&
              "bg-red-100 border-red-300"
            }`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
