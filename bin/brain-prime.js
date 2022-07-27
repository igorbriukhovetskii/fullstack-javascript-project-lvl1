#!/usr/bin/env node
import getUserName from '../src/cli.js';
import gameRound from '../src/games/brain-prime/game-round.js';
import gameProgress from '../src/game-progress.js';

const userName = getUserName();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

gameProgress(gameRound, userName);
