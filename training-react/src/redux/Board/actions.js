export const actions = {
  MARK_SQUARE: '@@BOARD/MARK_SQUARE'
};

export const actionCreators = {
  markSquare(id, step) {
    return {
      type: actions.MARK_SQUARE,
      payload: {
        id,
        step
      }
    };
  }
};
