import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Square(props) {
  return (
    <button className={style[`border${props.pos}`]} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  // eslint-disable-next-line
  pos: PropTypes.number,
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;
