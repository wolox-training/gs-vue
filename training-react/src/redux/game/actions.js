export function moveDone(squareId) {
  return {
    type: 'MOVE_DONE',
    squareId
  };
}

export function timeTravel(stepId) {
  return {
    type: 'TIME_TRAVEL',
    stepId
  };
}
