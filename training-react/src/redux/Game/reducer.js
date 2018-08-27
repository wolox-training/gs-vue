import { actions } from './actions';

const initialState = {
  status: null,
  currentStep: 0,
  lastStep: 0
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PERFORM_MOVE:
      return { ...state, currentStep: state.currentStep + 1, lastStep: state.currentStep + 1 };
    case actions.TIME_TRAVEL:
      return { ...state, currentStep: action.payload.step };
    case actions.FINISHED:
      return state;
    default:
      return state;
  }
};

export default gameReducer;
