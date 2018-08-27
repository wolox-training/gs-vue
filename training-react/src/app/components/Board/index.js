import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCreators as BoardActions } from '~redux/Board/actions';

import { actionCreators as GameActions } from '~redux/Game/actions';

import Square from '~components/Square';

import style from './styles.scss';

class Board extends Component {
  squareClickHandler = id => {
    this.props.performMove(id, this.props.currentStep);
  };

  render() {
    return (
      <div className={style.board}>
        {this.props.squares.map(square => (
          <Square
            key={square.id}
            id={square.id}
            value={square.value}
            onClick={this.squareClickHandler}
            visible={square.order <= this.props.currentStep}
          />
        ))}
      </div>
    );
  }
}

Board.propTypes = {
  currentStep: PropTypes.number,
  squares: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, value: PropTypes.string })).isRequired,
  performMove: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  squares: state.board.squares
});

const mapDispatchToProps = dispatch => ({
  performMove: (id, step) => {
    dispatch(BoardActions.markSquare(id, step));
    dispatch(GameActions.performMove());
    if (step === 8) {
      dispatch(GameActions.finished());
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
