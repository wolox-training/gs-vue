import calculateWinner from '../../app/components/Game/utils';
import historyReducer from '../history/reducer';

import { actions } from './actions';

const initialState = {
  history: [
    {
      squares: Array.from(Array(9)).map((_elem, index) => ({ id: index, value: null })),
      id: 0
    }
  ],
  xIsNext: true,
  status: null,
  currentStep: 0
};

const gameReducer = (state = initialState, action) => {
  let newHistory;
  switch (action.type) {
    case actions.MOVE_DONE:
      newHistory = historyReducer(state.history, action, state.currentStep, state.xIsNext);
      if (newHistory !== state.history) {
        return {
          history: newHistory,
          xIsNext: !state.xIsNext,
          status: calculateWinner(newHistory[newHistory.length - 1].squares),
          currentStep: state.currentStep + 1
        };
      }
      return state;
    case actions.TIME_TRAVEL:
      return {
        ...state,
        status: calculateWinner(state.history[action.stepId].squares),
        xIsNext: action.stepId % 2,
        currentStep: action.stepId
      };
    default:
      return state;
  }
};

export default gameReducer;
