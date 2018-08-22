import squareReducer from '../square/reducer';
import { actions } from '../game/actions';

const boardReducer = (state, action, xIsNext) => {
  switch (action.type) {
    case actions.MOVE_DONE:
      return {
        id: state.id + 1,
        squares: state.squares.map(elem => squareReducer(elem, action, xIsNext))
      };
    default:
      return state;
  }
};

export default boardReducer;
