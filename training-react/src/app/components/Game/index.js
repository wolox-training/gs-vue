import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Board from '~components/Board';

import { actionCreators as GameActions } from '~redux/Game/actions';

import style from './styles.scss';
import { GameOutcome } from './utils.js';

class Game extends Component {
  statusText = () => {
    const status = this.props.currentStep === this.props.lastStep ? this.props.status : null;
    if (status) {
      return status === GameOutcome.TIE ? 'Tie!' : `Winner: ${status}`;
    }
    return `Next player: ${this.props.currentStep % 2 ? 'O' : 'X'}`;
  };

  stepButtonText = step => (step ? `Go to move #${step}` : 'Go to game start');
  stepButtonClass = step => (this.props.currentStep === step ? style.currentStepButton : style.stepButton);

  render() {
    return (
      <div className={style.game}>
        <Board
          currentStep={this.props.currentStep}
          lastStep={this.props.lastStep}
          gameEnded={this.props.status && this.props.currentStep === this.props.lastStep}
        />
        <div className={style.gameInfo}>
          <div className={style.gameStatus}>{this.statusText()}</div>
          <ul className={style.stepList}>
            {this.props.steps.map((elem, index) => (
              <li className={style.stepItem} key={elem.id}>
                <button className={this.stepButtonClass(index)} onClick={() => this.props.timeTravel(index)}>
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
  steps: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
  currentStep: PropTypes.number,
  lastStep: PropTypes.number,
  status: PropTypes.string,
  timeTravel: PropTypes.func
};

const mapStateToProps = state => ({
  steps: Array.from(Array(state.game.lastStep + 1)).map((_elem, index) => ({ id: index })),
  currentStep: state.game.currentStep,
  lastStep: state.game.lastStep,
  status: state.game.status
});

const mapDispatchToProps = dispatch => ({
  timeTravel: step => {
    dispatch(GameActions.timeTravel(step));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
