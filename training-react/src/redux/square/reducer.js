const squareReducer = (state, action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      if (state.id === action.squareId && !state.value) {
        return { ...state, value: action.player };
      }
      return state;
    default:
      return state;
  }
};

export default squareReducer;
