import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from '~components/Square';

import style from './styles.scss';

class Board extends Component {
  handleClick = this.props.onClick;

  render() {
    return (
      <div className={style.board}>
        {this.props.squares.map(square => (
          <Square key={square.id} pos={square.id} value={square.value} onClick={this.handleClick} />
        ))}
      </div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, value: PropTypes.string })).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Board;
