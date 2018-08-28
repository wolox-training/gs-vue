export const actions = {
  PERFORM_MOVE: '@@GAME/PERFORM_MOVE',
  TIME_TRAVEL: '@@GAME/TIME_TRAVEL',
  END_GAME: '@@GAME/END_GAME'
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
  endGame(winner) {
    return {
      type: actions.END_GAME,
      payload: {
        winner
      }
    };
  }
};
