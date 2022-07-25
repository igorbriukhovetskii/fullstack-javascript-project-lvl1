#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import getRandomNumber from '../src/get-random-number.js';
import isWinner from '../src/is-winner.js';
import getCorrectAnswer from '../src/get-correct-answer.js';
import getGameMessage from '../src/get-game-message.js';

const userName = getUserName();

console.log(getGameMessage('start-even'));

let wins = 0;
let continueGame = true;

while (wins < 3 && continueGame) {
  const randomNumber = getRandomNumber(1, 1000);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(randomNumber);

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
