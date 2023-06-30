type Props = {
  rate: number;
};

export const StarRating2 = ({ rate }: Props) => {
  if (rate > 5) rate = 5;
  if (rate < 0) rate = 0;

  const emojis = ["☹️", "😐", "🙂", "😃", "🤩"];

  const rateInt = Math.floor(rate);
  const stars =
    `${emojis[rateInt - 1]}`.repeat(rateInt) + "😶".repeat(5 - rateInt);

  return (
    <div className="flex items-center text-4xl mt-5">
      <div className="bg-yellow-400 rounded p-2 text-black font-bold">
        {rate.toFixed(1)}
      </div>
      <div className="text-yellow-400 ml-3">{stars}</div>
    </div>
  );
};
