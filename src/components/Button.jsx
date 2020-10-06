import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName, buttonColor, buttonWide }) {
  const styles = (wide, color) => {
    const wideValue = (wide) ? '50%' : '25%';
    return ({
      width: wideValue,
      backgroundColor: color,
    });
  };

  return (
    <button style={styles(buttonWide, buttonColor)} type="submit">{ buttonName }</button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  buttonWide: PropTypes.bool,
};

Button.defaultProps = {
  buttonColor: '#F5913E',
  buttonWide: false,
};

export default Button;
