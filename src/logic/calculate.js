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
      total = total ? total * -1 : total;
      next = next ? next * -1 : next;
      break;
    case (/[x,+,÷,\-,%]/.test(buttonName)):
      // Use operate
      break;
    case '.':
      next = next ? next + buttonName : buttonName;
      break;
    case '=':
      total = total ? 0 : total;
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
