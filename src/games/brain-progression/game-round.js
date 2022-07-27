import readlineSync from 'readline-sync';
import getRandomNumber from '../../get-random-number.js';
import getProgression from './get-progression.js';
import isWinner from '../../is-winner.js';

const gameRound = () => {
  const start = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 9);
  const length = 10;
  const hiddenNumberIndex = getRandomNumber(0, (length - 1));
  const progression = getProgression(start, step, length, hiddenNumberIndex);

  console.log(`Question: ${progression.progression}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = progression.hiddenNumber;
  const isRoundWon = isWinner(correctAnswer, userAnswer);

  return {
    userAnswer,
    correctAnswer,
    isRoundWon,
  };
};

export default gameRound;
