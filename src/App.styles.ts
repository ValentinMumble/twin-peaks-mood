import styled from 'styled-components';
import YouTube from 'react-youtube';

export const Container = styled.div`
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

export const Filter = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  mix-blend-mode: color;
  background-color: orangered;
  opacity: 0.4;
  z-index: 5;
`;

export const Small = styled.div`
  font-variant: initial;
  font-size: 0.6em;
`;

export const Curtain = styled.div<{ isDrawn: boolean }>`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100%;
  transition: top 0.2s ease;
  top: ${({ isDrawn }) => (isDrawn ? 0 : -100)}%;
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
`;

export const Shadow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(0, transparent, black);
`;

export const Player = styled(YouTube)`
  position: fixed;
  z-index: 0;
  border: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  iframe {
    width: 100% !important;
    height: 100% !important;
  }
`;
