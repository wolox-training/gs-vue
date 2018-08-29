import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Square(props) {
  const handleClick = () => {
    props.onClick(props.id);
  };
  const clickable = !props.gameEnded && (!props.visible || !props.value);
  return (
    <button className={style[`border${props.id}`]} onClick={clickable ? handleClick : null}>
      {props.visible ? props.value : ''}
    </button>
  );
}

Square.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  gameEnded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Square;
