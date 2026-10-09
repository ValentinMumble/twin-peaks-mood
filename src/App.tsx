import {Credits} from './components';
import {CREDITS} from './constants/credits.tsx';
import {DEFAULT_VIDEO_ID, YOUTUBE_PLAYER_OPTS} from './constants/config';
import {usePlayer} from './hooks/usePlayer';
import {Container, Curtain, Filter, Player, Shadow} from './App.styles';

// The YouTube id is the whole path: twin-peaks-mood.vumble.dev/<id>
const videoId = window.location.pathname.slice(1) || DEFAULT_VIDEO_ID;

const App = () => {
  const {isCurtainClosed, setPlayer, audioRef, openCurtain} = usePlayer();

  return (
    <Container>
      <Curtain $isClosed={isCurtainClosed} onClick={openCurtain}>
        <Shadow />
        <span>enter the lodge...</span>
      </Curtain>
      <Player
        videoId={videoId}
        opts={YOUTUBE_PLAYER_OPTS}
        onReady={({target}: {target: YT.Player}) => setPlayer(target)}
      />
      <audio ref={audioRef} src="/theme.mp3" />
      <Filter />
      {!isCurtainClosed && <Credits credits={CREDITS} />}
    </Container>
  );
};

export {App};
