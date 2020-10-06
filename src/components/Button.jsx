import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    buttonName,
    buttonColor,
    buttonWide,
    clickHandler,
  } = props;

  const styles = (wide, color) => {
    const wideValue = (wide) ? '50%' : '25%';
    return ({
      width: wideValue,
      backgroundColor: color,
    });
  };

  const handleClick = (buttonName => {
    console.log(buttonName);
    return clickHandler(buttonName);
  });

  return (
    <button value={buttonName} onClick={e => handleClick(e.target.value)} style={styles(buttonWide, buttonColor)} type="submit">{ buttonName }</button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  buttonWide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonColor: '#F5913E',
  buttonWide: false,
};

export default Button;
