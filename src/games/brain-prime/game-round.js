import readlineSync from 'readline-sync';
import getRandomNumber from '../../get-random-number.js';
import isWinner from '../../is-winner.js';
import isPrime from './is-prime.js';

const gameRound = () => {
  const number = getRandomNumber(1, 100);

  console.log(`Question: ${number}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const isRoundWon = isWinner(userAnswer, correctAnswer);

  return {
    userAnswer,
    correctAnswer,
    isRoundWon,
  };
};

export default gameRound;
