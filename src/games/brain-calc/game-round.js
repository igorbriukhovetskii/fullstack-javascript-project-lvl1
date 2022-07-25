import readlineSync from 'readline-sync';
import getRandomNumber from '../../get-random-number.js';
import getMathOperator from './get-math-operator.js';
import getCorrectAnswer from './get-correct-answer.js';
import isWinner from '../../is-winner.js';

const gameRound = () => {
  const leftOperand = getRandomNumber(1, 100);
  const rightOperand = getRandomNumber(1, 10);
  const operator = getMathOperator();

  console.log(`Question: ${leftOperand} ${operator} ${rightOperand}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(leftOperand, rightOperand, operator);
  const isRoundWon = isWinner(userAnswer, correctAnswer);

  return {
    userAnswer,
    correctAnswer,
    isRoundWon,
  };
};

export default gameRound;
