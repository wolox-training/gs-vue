export const GameOutcome = {
  TIE: 'T',
  O: 'O',
  X: 'X'
};

const calculateWinner = (squares, move, currentStep) => {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  const squaresCopy = squares.map(sq => (sq.order >= currentStep ? { ...sq, value: null } : sq));

  squaresCopy[move].value = currentStep % 2 ? 'O' : 'X';

  const found = lines.find(line => {
    const [a, b, c] = line;
    return (
      squaresCopy[a].value &&
      squaresCopy[a].value === squaresCopy[b].value &&
      squaresCopy[a].value === squaresCopy[c].value
    );
  });

  if (found) {
    return squaresCopy[found[0]].value;
  }

  return currentStep === 8 ? GameOutcome.TIE : null;
};

export default calculateWinner;
