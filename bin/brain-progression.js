#!/usr/bin/env node
import getUserName from '../src/cli.js';
import gameRound from '../src/games/brain-progression/game-round.js';
import gameProgress from '../src/game-progress.js';

const userName = getUserName();

console.log('What number is missing in the progression?');

gameProgress(gameRound, userName);
