import Operate from './operate';

const Calculate = ((calculatorObject, buttonName) => {
  let { total, next, operation } = calculatorObject;

  switch (buttonName) {
    case 'A/C':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total = total ? Operate(total, '1', '+/-') : total;
      next = next ? Operate(next, '1', '+/-') : next;
      break;
    case (/[x,+,÷,\-,%]/.test(buttonName)):
      if (operation) {
        total = Operate(total, next, operation) === 'undefined' ? 'Error: Div by 0' : Operate(total, next, operation);
        next = null;
        operation = buttonName;
      } else {
        operation = buttonName;
      }
      break;
    case '.':
      if (operation) {
        next = next ? next + buttonName : '0.';
      } else {
        total = total ? total + buttonName : '0.';
      }
      break;
    case '=':
      if (operation && next) {
        total = total ? Operate(total, next, operation) : total;
        next = null;
        operation = null;
      }
      break;
    default:
      if (operation) {
        next = next ? next + buttonName : buttonName;
      } else {
        total = total ? total + buttonName : buttonName;
      }
  }

  return {
    total,
    next,
    operation,
  };
});

export default Calculate;
