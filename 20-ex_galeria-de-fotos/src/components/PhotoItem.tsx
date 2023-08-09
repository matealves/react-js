import { Photo } from "@/types/Photo";

type Props = {
  photo: Photo;
  propClick: () => void;
};

export const PhotoItem = ({ photo, propClick }: Props) => {
  return (
    <div onClick={propClick} className="cursor-pointer hover:opacity-80">
      <img src={`/assets/${photo.url}`} alt="" className="w-full" />
    </div>
  );
};
