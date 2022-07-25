#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import getRandomNumber from '../src/get-random-number.js';
import isWinner from '../src/is-winner.js';
import getGreatestCommonDenominator from '../src/games/brain-gcd/get-greatest-common-divisor.js';
import getGameMessage from '../src/get-game-message.js';

const userName = getUserName();

console.log(getGameMessage('start-gcd'));

let wins = 0;
let continueGame = true;

while (wins < 3 && continueGame) {
  const number1 = getRandomNumber(2, 50);
  const number2 = getRandomNumber(51, 100);

  console.log(`Question: ${number1} ${number2}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getGreatestCommonDenominator(number1, number2);

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
