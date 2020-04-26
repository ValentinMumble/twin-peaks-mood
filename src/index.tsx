import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import {App} from 'App';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family:  sans-serif;
  }
`;

const Router = () => (
  <BrowserRouter basename="/hk">
    <Switch>
      {/* <Route exact path="/callback/" component={Callback} /> */}
      <Route exact path="*" component={App} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
