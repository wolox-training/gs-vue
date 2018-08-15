import React, { Component } from 'react';

import Board from '~components/Board';

import style from './styles.scss';
import calculateWinner from './utils.js';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    currentStep: 0
  };

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.currentStep + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares }]),
      xIsNext: !this.state.xIsNext,
      currentStep: history.length
    });
  }

  jumpTo(step) {
    this.setState({
      currentStep: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.currentStep];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      const buttonClass = this.state.currentStep === move ? style.currentStepButton : style.stepButton;
      return (
        /** since steps are ordered in the array, index identifies the element */
        // eslint-disable-next-line
        <li className={style.stepItem} key={move}>
          <button className={buttonClass} onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = winner === 'Tie!' ? winner : `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className={style.game}>
        <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        <div className={style.gameInfo}>
          <div className={style.gameStatus}>{status}</div>
          <ul className={style.stepList}>{moves}</ul>
        </div>
      </div>
    );
  }
}

export default Game;
