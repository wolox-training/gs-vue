import boardReducer from '../board/reducer';

const historyReducer = (state, action, currentStep) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      return state.concat(boardReducer(state[currentStep]));
    default:
      return state;
  }
};

export default historyReducer;
