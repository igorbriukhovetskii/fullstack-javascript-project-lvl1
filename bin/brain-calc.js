#!/usr/bin/env node
import getUserName from '../src/cli.js';
import gameProgress from '../src/game-progress.js';
import gameRound from '../src/games/brain-calc/game-round.js';

const userName = getUserName();

console.log('What is the result of the expression?');

gameProgress(gameRound, userName);
