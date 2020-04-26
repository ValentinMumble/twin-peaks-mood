import React, {useRef, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import styled, {css} from 'styled-components';
import {Credits, Spacer} from 'components';

const Container = styled.div<{hasVideo: boolean}>`
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
  font-size: 70px;
  font-family: AvantGarde;
  font-variant: small-caps;
  letter-spacing: 1px;

  ${({hasVideo}) =>
    !hasVideo &&
    css`
      background-image: url('mountain.jpeg');
    `}
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

const Player = styled.iframe`
  position: fixed;
  z-index: 0;
  border: none;
  width: 100%;
  height: 100%;
`;

const Curtain = styled.div<{isDrawn: boolean}>`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: black;
  transition: top 0.2s ease;
  top: ${({isDrawn}) => (isDrawn ? 0 : -100)}%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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
    <Small>Directed by</Small>
    DAVID LYNCH
  </>,
];

type AppProps = {
  id: string;
};

const App = ({
  match: {
    params: {id},
  },
}: RouteComponentProps<AppProps>) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isDrawn, draw] = useState(true);

  const handleCurtain = () => {
    draw(false);
    audioRef.current?.play();
  };

  return (
    <Container hasVideo={undefined !== id}>
      <Curtain isDrawn={isDrawn} onClick={handleCurtain}>
        enter the lodge...
      </Curtain>
      {!isDrawn && undefined !== id && (
        <Player id="player" src={`https://www.youtube.com/embed/${id}?mute=1&enablejsapi=1&controls=0&autoplay=1`} />
      )}
      <audio ref={audioRef} src="/theme.mp3" />
      <Filter />
      {!isDrawn && <Credits credits={credits} />}
    </Container>
  );
};

export {App};
