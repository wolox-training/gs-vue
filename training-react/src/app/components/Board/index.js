import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from '~components/Square';

import style from './styles.scss';

class Board extends Component {
  render() {
    return (
      <div className={style.board}>
        {this.props.squares.map(square => (
          <Square
            key={square.id}
            pos={square.id}
            value={square.value}
            onClick={() => this.props.onClick(square.id)}
          />
        ))}
      </div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(Object),
  onClick: PropTypes.func
};

export default Board;
