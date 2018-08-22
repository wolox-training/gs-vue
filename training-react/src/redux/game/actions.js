export const actions = {
  MOVE_DONE: '@@game/MOVE_DONE',
  TIME_TRAVEL: '@@game/TIME_TRAVEL'
};

export const actionCreators = {
  moveDone(squareId) {
    return {
      type: actions.MOVE_DONE,
      squareId
    };
  },
  timeTravel(stepId) {
    return {
      type: actions.TIME_TRAVEL,
      stepId
    };
  }
};
