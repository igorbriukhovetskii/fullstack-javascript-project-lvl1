import isEven from './is-even.js';

const isWinner = (num, answer) => {
  let win = false;
  if (isEven(num) && answer === 'yes') {
    win = true;
  } else if (!isEven(num) && answer === 'no') {
    win = true;
  }

  return win;
};

export default isWinner;
