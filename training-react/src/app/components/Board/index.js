import React, { Component } from 'react';

import Square from '~components/Square';

import style from './styles.scss';
import calculateWinner from './utils.js';

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ squares, xIsNext: !this.state.xIsNext });
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = winner === 'Tie!' ? winner : `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    const cells = Array(9);

    for (let i = 0; i < cells.length; i += 1) {
      cells[i] = <Square key={i} pos={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    return (
      <div className={style.boardAndStatus}>
        <div className={style.status}>{status}</div>
        <div className={style.board}>{cells}</div>
      </div>
    );
  }
}

export default Board;
