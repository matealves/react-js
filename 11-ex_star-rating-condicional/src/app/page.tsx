import { StarRating } from "@/components/StarRating";
import { StarRating2 } from "@/components/StarRating2";

const Page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <StarRating rate={3.6} />
      <StarRating2 rate={2.3} />
    </div>
  );
};

export default Page;
