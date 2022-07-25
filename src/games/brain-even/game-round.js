import readlineSync from 'readline-sync';
import getRandomNumber from '../../get-random-number.js';
import isEven from './is-even.js';
import isWinner from '../../is-winner.js';

const gameRound = () => {
  const randomNumber = getRandomNumber(1, 1000);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const isRoundWon = isWinner(userAnswer, correctAnswer);

  return {
    userAnswer,
    correctAnswer,
    isRoundWon,
  };
};

export default gameRound;
