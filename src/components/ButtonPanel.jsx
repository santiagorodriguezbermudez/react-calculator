import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

function ButtonPanel(props) {
  const symbolArray = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const handleClick = (buttonName => props.clickHandler(buttonName));

  const listedButton = (btnGroup => btnGroup.map(button => {
    let buttonComponent;
    if (['÷', 'x', '-', '+', '='].includes(button)) {
      buttonComponent = <Button key={button} clickHandler={handleClick} buttonName={button} />;
    } else if (button === '0') {
      buttonComponent = <Button key={button} clickHandler={handleClick} buttonName={button} buttonColor="#E0E0E0" buttonWide />;
    } else {
      buttonComponent = <Button key={button} clickHandler={handleClick} buttonName={button} buttonColor="#E0E0E0" />;
    }
    return buttonComponent;
  }));

  const listedArray = symbolArray.map(group => <div key={group[0]}>{listedButton(group)}</div>);

  return (
    <div className="button-panel">{listedArray}</div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
