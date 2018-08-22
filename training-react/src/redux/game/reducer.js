import calculateWinner from '../../app/components/Game/utils';
import historyReducer from '../history/reducer';

const gameReducer = (state, action) => {
  let newHistory;
  switch (action.type) {
    case 'MAKE_MOVE':
      newHistory = historyReducer(state.history, action, state.currentStep);
      if (newHistory !== state.history) {
        return {
          xIsNext: !state.xIsNext,
          status: calculateWinner(newHistory[newHistory.length - 1].squares),
          currentStep: state.currentStep + 1
        };
      }
      return state;
    case 'TIME_TRAVEL':
      return {
        ...state,
        currentStep: action.stepId
      };
    default:
      return state;
  }
};

export default gameReducer;
