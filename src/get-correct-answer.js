import isEven from './is-even.js';

const getCorrectAnswer = (num) => {
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return correctAnswer;
};

export default getCorrectAnswer;
