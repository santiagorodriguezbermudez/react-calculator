import Operate from './operate';

const Calculate = ((calculatorObject, buttonName) => {
  let { total, next, operation } = calculatorObject;
  console.log(`This is the total: ${total}`);
  console.log(`This is the next: ${next}`);
  console.log(`This is the operation: ${operation}`);
  console.log(`Button name: ${buttonName}`);
  console.log(`Button name type: ${typeof buttonName}`);

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total = total ? Operate(total, '1', '+/-') : total;
      next = next ? Operate(next, '1', '+/-') : next;
      break;
    case /[x,+,÷,\-,%]/.test(buttonName) && buttonName:
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
      console.log('default option');
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
