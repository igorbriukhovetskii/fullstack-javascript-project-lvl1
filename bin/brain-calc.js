#!/usr/bin/env node
import getUserName from '../src/cli.js';
import getGameMessage from '../src/get-game-message.js';
import gameProgress from '../src/game-progress.js';
import gameRound from '../src/games/brain-calc/game-round.js';

const userName = getUserName();

console.log(getGameMessage('start-calc'));

gameProgress(gameRound, userName);
