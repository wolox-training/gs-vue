import { actions } from './actions';

const initialState = {
  squares: Array.from(Array(9)).map((_elem, index) => ({
    id: index,
    value: null,
    order: -1
  }))
};

const boardReducer = (state = initialState, action) => {
  let squares;
  switch (action.type) {
    case actions.MARK_SQUARE:
      squares = state.squares.map(square => {
        if (square.id === action.payload.id) {
          return { ...square, order: action.payload.step + 1, value: action.payload.step % 2 ? 'O' : 'X' };
        } else if (square.order > action.payload.step) {
          return { ...square, value: null, order: -1 };
        }
        return square;
      });

      return { squares };
    default:
      return state;
  }
};

export default boardReducer;
