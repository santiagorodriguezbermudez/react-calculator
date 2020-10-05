import React from 'react';
import Button from './Button';

function ButtonPanel() {
  const symbolArray = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const listedButton = (btnGroup => btnGroup.map(button => {
    let buttonComponent;
    if (['÷', 'X', '-', '+'].includes(button)) {
      buttonComponent = <Button buttonName={button} />;
    } else if (button === '0') {
      buttonComponent = <Button buttonName={button} buttonColor="#E0E0E0" buttonWide />;
    } else {
      buttonComponent = <Button buttonName={button} buttonColor="#E0E0E0" />;
    }
    return buttonComponent;
  }));

  const listedArray = symbolArray.map(group => <div key={group[0]}>{listedButton(group)}</div>);

  return (
    <div className="button-panel">{listedArray}</div>
  );
}

export default ButtonPanel;
