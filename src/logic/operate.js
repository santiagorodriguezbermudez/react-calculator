import Big from 'big.js';

const Operate = ((numberOne, numberTwo, operation) => {
  const bigOne = Big(numberOne);
  const bigTwo = Big(numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = bigOne.plus(bigTwo);
      break;
    case '-':
      result = bigOne.minus(bigTwo);
      break;
    case 'x':
      result = bigOne.mul(bigTwo);
      break;
    case '÷':
      result = numberTwo === '0' ? 'undefined' : numberOne.div(numberTwo);
      break;
    case '%':
      result = numberOne.mul(numberTwo).div(100);
      break;
    case '+/-':
      result = numberOne.mul(-1);
      break;
    default:
      result = 'undefined';
  }

  result = result === 'undefined' ? result : result.toString();

  return {
    result,
  };
})();

export default Operate;
