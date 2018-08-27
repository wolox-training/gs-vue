import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Square(props) {
  const handleClick = () => {
    props.onClick(props.pos);
  };
  return (
    <button className={style[`border${props.pos}`]} onClick={handleClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  pos: PropTypes.number,
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;
