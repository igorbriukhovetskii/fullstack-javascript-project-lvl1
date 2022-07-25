import readlineSync from 'readline-sync';
import getRandomNumber from '../../get-random-number.js';
import getGreatestCommonDenominator from './get-greatest-common-divisor.js';
import isWinner from '../../is-winner.js';

const gameRound = () => {
  const number1 = getRandomNumber(2, 50);
  const number2 = getRandomNumber(51, 100);

  console.log(`Question: ${number1} ${number2}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getGreatestCommonDenominator(number1, number2);
  const isRoundWon = isWinner(correctAnswer, userAnswer);

  return {
    userAnswer,
    correctAnswer,
    isRoundWon,
  };
};

export default gameRound;
