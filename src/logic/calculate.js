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
      next = next ? Operate(total, next, operation) : next;
      total = total ? Operate(total, next, operation) : total;
      break;
    case '.':
      next = next ? next + buttonName : '0.';
      total = total ? total + buttonName : '0.';
      break;
    case '=':
      total = total ? Operate(total, next, operation) : total;
      next = null;
      operation = null;
      break;
    default:
      next = next ? next + buttonName : buttonName;
  }

  return {
    total,
    next,
    operation,
  };
})();

export default Calculate;
