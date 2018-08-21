const calculateWinner = squares => {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  const found = lines.find(line => {
    const [a, b, c] = line;
    return squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value;
  });

  if (found) {
    return squares[found[0]].value;
  }

  return squares.every(square => square.value) ? 'T' : null;
};

export default calculateWinner;
