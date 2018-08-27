import { createStore, combineReducers } from 'redux';

import gameReducer from './Game/reducer';
import boardReducer from './Board/reducer';

const rootReducer = combineReducers({
  game: gameReducer,
  board: boardReducer
});

const store = createStore(
  rootReducer,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
