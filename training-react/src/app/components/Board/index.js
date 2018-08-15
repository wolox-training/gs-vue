import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from '~components/Square';

import style from './styles.scss';

class Board extends Component {
  render() {
    const cells = Array(9);

    for (let i = 0; i < cells.length; i += 1) {
      cells[i] = (
        <Square key={i} pos={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
      );
    }

    return <div className={style.board}>{cells}</div>;
  }
}

Board.propTypes = {
  squares: PropTypes.Array,
  onClick: PropTypes.func
};

export default Board;
