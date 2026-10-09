import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from 'styled-components';
import {App} from './App';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AvantGarde';
    src: url('/ITC_Avant_Garde_Gothic_Demi_Condensed.ttf') format('truetype');
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
