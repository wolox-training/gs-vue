import { createStore } from 'redux';

import gameReducer from './game/reducer';

const store = createStore(
  gameReducer,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
