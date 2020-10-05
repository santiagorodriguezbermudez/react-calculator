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

  const listedButton = (btn => btn.map(button => <Button key={button} buttonName={button} />));

  const listedArray = symbolArray.map(group => <div key={group[0]}>{listedButton(group)}</div>);

  return (
    <div className="button-panel">{listedArray}</div>
  );
}

export default ButtonPanel;
