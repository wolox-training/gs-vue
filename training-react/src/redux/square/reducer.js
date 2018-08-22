import { actions } from '../game/actions';

const squareReducer = (state, action, xIsNext) => {
  switch (action.type) {
    case actions.MOVE_DONE:
      if (state.id === action.squareId && !state.value) {
        return { ...state, value: xIsNext ? 'X' : 'O' };
      }
      return state;
    default:
      return state;
  }
};

export default squareReducer;
