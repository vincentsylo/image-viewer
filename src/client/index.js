import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './views/Root';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Root />
      </HashRouter>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./views/Root', () => {
    const NextRootContainer = require('./views/Root'); // eslint-disable-line
    render(NextRootContainer);
  });
}
