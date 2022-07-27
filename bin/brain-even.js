#!/usr/bin/env node
import getUserName from '../src/cli.js';
import gameRound from '../src/games/brain-even/game-round.js';
import gameProgress from '../src/game-progress.js';

const userName = getUserName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

gameProgress(gameRound, userName);
