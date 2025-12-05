import {useParams} from 'react-router-dom';
import {Credits} from './components';
import {CREDITS} from './constants/credits.tsx';
import {DEFAULT_VIDEO_ID, YOUTUBE_PLAYER_OPTS} from './constants/config';
import {usePlayer} from './hooks/usePlayer';
import {Container, Curtain, Filter, Player, Shadow} from './App.styles';

const App = () => {
  const params = useParams<{id?: string}>();
  const {isDrawn, setPlayer, audioRef, drawCurtain} = usePlayer();
  const videoId = params.id || DEFAULT_VIDEO_ID;

  return (
    <Container>
      <Curtain isDrawn={isDrawn} onClick={drawCurtain}>
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
      {!isDrawn && <Credits credits={CREDITS} />}
    </Container>
  );
};

export {App};
