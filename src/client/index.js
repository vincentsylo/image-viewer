import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, subscribeStore } from 'client/stores';
import { initialState } from 'client/stores/images';
import storage from 'client/utils/storage';
import Root from './features/Root';

const images = storage.load('images') || initialState;
const initialData = { images };
const store = configureStore(initialData);
subscribeStore(store);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Root} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./features/Root', () => {
    const NextRootContainer = require('./features/Root'); // eslint-disable-line
    render(NextRootContainer);
  });
}
