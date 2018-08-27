export const actions = {
  PERFORM_MOVE: '@@GAME/PERFORM_MOVE',
  TIME_TRAVEL: '@@GAME/TIME_TRAVEL',
  FINISHED: '@@GAME/FINISHED'
};

export const actionCreators = {
  performMove() {
    return {
      type: actions.PERFORM_MOVE
    };
  },
  timeTravel(step) {
    return {
      type: actions.TIME_TRAVEL,
      payload: {
        step
      }
    };
  },
  finished() {
    return {
      type: actions.FINISHED
    };
  }
};
