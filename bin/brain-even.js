#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import getRandomNumber from '../src/get-random-number.js';
import isWinner from '../src/is-winner.js';
import getCorrectAnswer from '../src/get-correct-answer.js';

const userName = getUserName();
const startQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
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
  const randomNumber = getRandomNumber(1, 1000);

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = getCorrectAnswer(randomNumber);

  if (isWinner(randomNumber, userAnswer)) {
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
