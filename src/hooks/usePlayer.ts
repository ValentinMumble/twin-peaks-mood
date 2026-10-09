import {useRef, useState} from 'react';

export const usePlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isCurtainClosed, setCurtainClosed] = useState<boolean>(true);
  const [player, setPlayer] = useState<YT.Player>();

  const openCurtain = () => {
    setCurtainClosed(false);
    audioRef.current?.play();
    player?.playVideo();
  };

  return {isCurtainClosed, player, setPlayer, audioRef, openCurtain};
};
