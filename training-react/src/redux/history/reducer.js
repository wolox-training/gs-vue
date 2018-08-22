import boardReducer from '../board/reducer';
import { actions } from '../game/actions';

const historyReducer = (state, action, currentStep, xIsNext) => {
  let historyHead;
  switch (action.type) {
    case actions.MOVE_DONE:
      historyHead = state.slice(0, currentStep + 1);
      return historyHead.concat(boardReducer(historyHead[historyHead.length - 1], action, xIsNext));
    default:
      return state;
  }
};

export default historyReducer;
