import squareReducer from '../square/reducer';

const boardReducer = (state, action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      return {
        id: state.id + 1,
        squares: state.squares.map(elem => squareReducer(elem))
      };
    default:
      return state;
  }
};

export default boardReducer;
