import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Square(props) {
  const handleClick = () => {
    props.onClick(props.id);
  };
  return (
    <button className={style[`border${props.id}`]} onClick={!props.value ? handleClick : null}>
      {props.visible ? props.value : ''}
    </button>
  );
}

Square.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  visible: PropTypes.bool,
  onClick: PropTypes.func
};

export default Square;
