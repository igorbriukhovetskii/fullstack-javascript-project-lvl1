#!/usr/bin/env node
import getUserName from '../src/cli.js';
import gameRound from '../src/games/brain-gcd/game-round.js';
import gameProgress from '../src/game-progress.js';

const userName = getUserName();

console.log('Find the greatest common divisor of given numbers.');

gameProgress(gameRound, userName);
