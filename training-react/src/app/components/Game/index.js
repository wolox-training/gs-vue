import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from '~components/Board';

import { actionCreators } from '../../../redux/game/actions';

import style from './styles.scss';
import { GameOutcome } from './utils.js';

class Game extends Component {
  handleClick = i => {
    this.props.dispatch(actionCreators.moveDone(i));
  };

  jumpTo = step => {
    this.props.dispatch(actionCreators.timeTravel(step));
  };

  statusText = () => {
    const status = this.props.status;
    if (status) {
      return status === GameOutcome.TIE ? 'Tie!' : `Winner: ${status}`;
    }
    return `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
  };

  stepButtonText = step => (step ? `Go to move #${step}` : 'Go to game start');
  stepButtonClass = step => (this.props.currentStep === step ? style.currentStepButton : style.stepButton);

  render() {
    const history = this.props.history;
    const current = history[this.props.currentStep];

    return (
      <div className={style.game}>
        <Board squares={current.squares} onClick={this.handleClick} />
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

Game.propTypes = {
  history: Array,
  xIsNext: Boolean,
  currentStep: Number,
  status: String
};

const mapStateToProps = state => ({
  history: state.history,
  xIsNext: state.xIsNext,
  currentStep: state.currentStep,
  status: state.status
});

export default connect(mapStateToProps)(Game);
