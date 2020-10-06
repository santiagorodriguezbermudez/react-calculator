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
      result = bigTwo.toString() === '0' ? 'undefined' : bigOne.div(bigTwo);
      break;
    case '%':
      result = bigOne.div(100);
      break;
    case '+/-':
      result = bigOne.mul(-1);
      break;
    default:
      result = 'undefined';
  }

  // result = result === 'undefined' ? result : result.toString();
  return result.toString();
});

export default Operate;
