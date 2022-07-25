#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import getRandomNumber from '../src/get-random-number.js';
import getMathOperator from '../src/games/brain-calc/get-math-operator.js';
import getCorrectAnswer from '../src/games/brain-calc/get-correct-answer.js';
import isWinner from '../src/is-winner.js';
import getGameMessage from '../src/get-game-message.js';

const userName = getUserName();

console.log(getGameMessage('start-calc'));

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
    console.log(getGameMessage('win'));
  } else {
    continueGame = false;
    console.log(getGameMessage('fail', userName, userAnswer, correctAnswer));
  }
}

if (wins === 3) {
  console.log(getGameMessage('congrats', userName));
}
