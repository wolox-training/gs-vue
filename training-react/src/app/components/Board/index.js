import React, { Component, Fragment } from 'react';

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

    return (
      <Fragment>
        <div className={style.status}>{status}</div>
        <div className={style.boardRow}>
          <Square value={this.state.squares[0]} onClick={() => this.handleClick(0)} />
          <Square value={this.state.squares[1]} onClick={() => this.handleClick(1)} />
          <Square value={this.state.squares[2]} onClick={() => this.handleClick(2)} />
        </div>
        <div className={style.boardRow}>
          <Square value={this.state.squares[3]} onClick={() => this.handleClick(3)} />
          <Square value={this.state.squares[4]} onClick={() => this.handleClick(4)} />
          <Square value={this.state.squares[5]} onClick={() => this.handleClick(5)} />
        </div>
        <div className={style.boardRow}>
          <Square value={this.state.squares[6]} onClick={() => this.handleClick(6)} />
          <Square value={this.state.squares[7]} onClick={() => this.handleClick(7)} />
          <Square value={this.state.squares[8]} onClick={() => this.handleClick(8)} />
        </div>
      </Fragment>
    );
  }
}

export default Board;
