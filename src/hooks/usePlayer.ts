import { useRef, useState } from 'react';

export const usePlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isDrawn, setDrawn] = useState<boolean>(true);
  const [player, setPlayer] = useState<YT.Player>();

  const drawCurtain = () => {
    setDrawn(false);
    audioRef.current?.play();
    player?.playVideo();
  };

  return { isDrawn, player, setPlayer, audioRef, drawCurtain };
};
