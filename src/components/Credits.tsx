import {useState, useEffect, ReactNode} from 'react';
import styled, {keyframes} from 'styled-components';

const DELAY = 4000;
const BROWN = '#644647';
const GREEN = '#47ff52';

const fadeInOpacity = keyframes`
  0% {
    opacity: 0;
  }
  33% {
    opacity: 1;
  }
  67% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
  color: ${BROWN};
  text-shadow: 1.5px 1.5px 0 ${GREEN}, -1.5px -1.5px 0 ${GREEN}, 1.5px -1.5px 0 ${GREEN}, -1.5px 1.5px 0 ${GREEN},
    0px 1.5px 0 ${GREEN}, 1.5px 0px 0 ${GREEN}, 0px -1.5px 0 ${GREEN}, -1.5px 0px 0 ${GREEN}, 5px 3px 0 #111;
  cursor: default;

  animation-name: ${fadeInOpacity};
  animation-timing-function: ease-in;
  animation-duration: ${DELAY / 2}ms;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

type CreditsProps = {
  credits: ReactNode[];
};

const Credits = ({credits}: CreditsProps) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (current === credits.length) {
      setCurrent(0);
    }

    const timeout = setTimeout(() => setCurrent(current => current + 1), DELAY);

    return () => clearTimeout(timeout);
  }, [current, credits.length]);

  return <Container>{credits[current]}</Container>;
};

export {Credits};
