import {useEffect, useRef, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import styled from 'styled-components';
import {Credits, Spacer} from 'components';
import YouTube from 'react-youtube';
import {getRandomVid} from 'youtube-random-video';

const {REACT_APP_YOUTUBE_API_KEY} = process.env;

const Container = styled.div`
  @font-face {
    font-family: 'AvantGarde';
    src: url('ITC_Avant_Garde_Gothic_Demi_Condensed.x-font-ttf');
  }

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-size: cover;
  z-index: 1;
  text-align: center;
  font-size: 80px;
  font-family: AvantGarde;
  font-variant: small-caps;
  letter-spacing: 1px;
`;

const Filter = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  mix-blend-mode: color;
  background-color: orangered;
  opacity: 0.4;
  z-index: 5;
`;

const Small = styled.div`
  font-variant: initial;
  font-size: 0.6em;
`;

const Curtain = styled.div<{isDrawn: boolean}>`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100%;
  transition: top 0.2s ease;
  top: ${({isDrawn}) => (isDrawn ? 0 : -100)}%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: black 5px 5px, black -1px -1px;

  > span {
    z-index: 2;
  }

  background: linear-gradient(-135deg, white 25%, transparent 25%) 0 -400px,
    linear-gradient(135deg, white 25%, transparent 25%) 0 -400px,
    linear-gradient(-45deg, white 25%, transparent 25%) -400px 400px,
    linear-gradient(45deg, white 25%, transparent 25%) -400px 400px;
  background-size: 160px 160px;
  background-color: black;
  /* background-repeat: no-repeat; */
`;

const Shadow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(0, transparent, black);
`;

const Player = styled(YouTube)`
  position: fixed;
  z-index: 0;
  border: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const credits = [
  '',
  'TWIN PEAKS',
  '',
  <>
    <Spacer height={100} />
    <Small>Starring</Small>
    <Spacer height={30} />
    KYLE MacLACHLAN
  </>,
  <>
    <Spacer height={150} />
    MICHAEL ONTKEAN
  </>,
  'MADCHEN AMICK',
  'DANA ASHBROOK',
  'AMÉLIE BÛCHE',
  'RICHARD BEYMER',
  'LARA FLYNN BOYLE',
  'SHERILYN FENN',
  'WARREN FROST',
  'PEGGY LIPTON',
  'JAMES MARSHALL',
  'EVERETT McGILL',
  'RAY WISE',
  <>
    JOAN CHEN<Small>as</Small>
    <Small>Jocelyn Packard</Small>
  </>,
  <>
    <Small>and</Small>
    PIPER LAURIE
    <Small>as</Small>
    <Small>Katherine Martell</Small>
  </>,
  <>
    <Small>Also starring</Small>
    RUSS TAMBLYN
  </>,
  'ERIC Da Re',
  <>
    <Small>Production Designer</Small>
    PATRICIA NORRIS
  </>,
  <>
    <Small>Music Composed &amp;</Small>
    <Small>Conducted by</Small>
    ANGELO BADALAMENTI
  </>,
  <>
    <Small>Produced by</Small>
    DAVID J. LATT
  </>,
  <>
    <Small>Written by</Small>
    MARK FROST
    <Small>&amp;</Small>
    DAVID LYNCH
  </>,
  <>
    <Small>Directed by</Small>
    DAVID LYNCH
  </>,
];

type AppProps = {
  id: string;
};

const App = ({
  match: {
    params: {id = 'VtvBpcyQP9M'},
  },
}: RouteComponentProps<AppProps>) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isDrawn, setDrawn] = useState<boolean>(true);
  const [player, setPlayer] = useState<YT.Player>();
  const [videoId, setVideoId] = useState<string>(id);

  const drawCurtain = () => {
    setDrawn(false);
    audioRef.current?.play();
    player?.playVideo();
  };

  useEffect(() => {
    if (!REACT_APP_YOUTUBE_API_KEY) {
      throw new Error('Missing YouTube API key env variable');
    }

    if ('random' === videoId) {
      getRandomVid(REACT_APP_YOUTUBE_API_KEY, (error, {id}) => {
        if (null !== error) {
          console.error(error);

          return;
        }

        setVideoId(id.videoId);
      });
    }
  }, [videoId]);

  return (
    <Container>
      <Curtain isDrawn={isDrawn} onClick={drawCurtain}>
        <Shadow />
        <span>enter the lodge...</span>
      </Curtain>
      <Player
        videoId={videoId}
        opts={{playerVars: {controls: 0, mute: 1, iv_load_policy: 3}}}
        onReady={({target}) => setPlayer(target)}
      />
      <audio ref={audioRef} src="/theme.mp3" />
      <Filter />
      {!isDrawn && <Credits credits={credits} />}
    </Container>
  );
};

export {App};
