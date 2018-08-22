import React, { Component } from 'react';

import Board from '~components/Board';

import style from './styles.scss';
import calculateWinner, { GameOutcome } from './utils.js';

class Game extends Component {
  state = {
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

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.currentStep + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    const currentBoardId = current.id;
    const status = this.state.status;
    if (status || squares[i].value) {
      return;
    }
    squares[i] = { ...squares[i], value: this.state.xIsNext ? 'X' : 'O' };
    const winner = calculateWinner(squares);
    this.setState({
      history: history.concat([{ squares, id: currentBoardId + 1 }]),
      xIsNext: !this.state.xIsNext,
      status: winner,
      currentStep: history.length
    });
  };

  jumpTo = step => {
    this.setState({
      currentStep: step,
      xIsNext: step % 2 === 0,
      status: calculateWinner(this.state.history[step].squares)
    });
  };

  statusText = () => {
    const status = this.state.status;
    if (status) {
      return status === GameOutcome.TIE ? 'Tie!' : `Winner: ${status}`;
    }
    return `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
  };

  stepButtonText = step => (step ? `Go to move #${step}` : 'Go to game start');
  stepButtonClass = step => (this.state.currentStep === step ? style.currentStepButton : style.stepButton);

  render() {
    const history = this.state.history;
    const current = history[this.state.currentStep];

    return (
      <div className={style.game}>
        <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        <div className={style.gameInfo}>
          <div className={style.gameStatus}>{this.statusText()}</div>
          <ul className={style.stepList}>
            {history.map((elem, index) => (
              <li className={style.stepItem} key={elem.id}>
                <button className={this.stepButtonClass(index)} onClick={() => this.jumpTo(index)}>
                  {this.stepButtonText(index)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Game;
