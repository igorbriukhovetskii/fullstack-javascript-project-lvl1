import getRandomNumber from '../../get-random-number.js';

const getMathOperator = () => {
  const operators = ['+', '-', '*'];

  return operators[getRandomNumber(0, 2)];
};

export default getMathOperator;
