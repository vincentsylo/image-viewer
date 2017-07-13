import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Root from './features/Root';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Root} />
        </Switch>
      </BrowserRouter>
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
