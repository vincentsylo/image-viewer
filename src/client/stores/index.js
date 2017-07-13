import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import _ from 'lodash';
import storage from 'client/utils/storage';
import rootReducer from './rootReducer';

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(require('./rootReducer')); // eslint-disable-line
    });
  }

  return store;
}

function updateLocalStorageIfNeeded(key, previous, current) {
  if (!_.isEqual(previous, current)) {
    _.debounce(() => {
      storage.save(key, current);
    })();
  }
}

export function subscribeStore(store) {
  let currentImages;

  store.subscribe(() => {
    const previousImages = currentImages;
    currentImages = store.getState().images;
    updateLocalStorageIfNeeded('images', previousImages, currentImages);
  });
}
