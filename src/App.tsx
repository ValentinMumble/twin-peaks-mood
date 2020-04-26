import React, {useRef} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import styled from 'styled-components';
import {Credits, Spacer} from 'components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-image: url('mountain.jpeg');
  background-size: cover;
  z-index: 1;
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

  return (
    <Container>
      {undefined !== id && (
        <Player src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&enablejsapi=1&controls=0`} />
      )}
      <audio autoPlay={true} ref={audioRef} src="/theme.mp3" />
      <Filter />
      <Credits credits={credits} />
    </Container>
  );
};

export {App};
