"use client";

import { VideoPlayer } from "@/components/VideoPlayer";
import { useEffect, useState } from "react";

const Page = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      />
      <button
        onClick={() => setPlaying(!playing)}
        className="bg-blue-600 p-2 m-3 rounded-md"
      >
        {playing ? "II Pause" : "▶ Play"}
      </button>
    </div>
  );
};

export default Page;
