#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import getRandomNumber from '../src/get-random-number.js';
import getMathOperator from '../src/games/brain-calc/get-math-operator.js';
import getCorrectAnswer from '../src/games/brain-calc/get-correct-answer.js';
import isWinner from '../src/is-winner.js';

const userName = getUserName();
const startQuestion = 'What is the result of the expression?';
const winMessage = 'Correct!';
const congratsMessage = `Congratulations, ${userName}!`;

const getFailMessage = (falseAnswer, trueAnswer) => {
  const message = `'${falseAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`;

  return message;
};

console.log(startQuestion);

let wins = 0;
let continueGame = true;

while (wins < 3 && continueGame) {
  const leftOperand = getRandomNumber(1, 100);
  const rightOperand = getRandomNumber(1, 10);
  const operator = getMathOperator();

  console.log(`Question: ${leftOperand} ${operator} ${rightOperand}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(leftOperand, rightOperand, operator);

  if (isWinner(correctAnswer, userAnswer)) {
    wins += 1;
    console.log(winMessage);
  } else {
    continueGame = false;
    console.log(getFailMessage(userAnswer, correctAnswer));
  }
}

if (wins === 3) {
  console.log(congratsMessage);
}
