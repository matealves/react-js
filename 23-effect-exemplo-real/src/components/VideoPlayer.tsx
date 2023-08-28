import { useEffect, useRef } from "react";

type Props = {
  src: string;
  isPlaying: boolean;
};

export const VideoPlayer = ({ src, isPlaying }: Props) => {
  const videoTag = useRef<HTMLVideoElement>(null);

  // sempre que o comp for redenrizado o effect é executado.
  useEffect(() => {
    if (isPlaying) {
      videoTag.current?.play();
    } else {
      videoTag.current?.pause();
    }
  });

  return <video ref={videoTag} src={src} loop playsInline></video>;
};
