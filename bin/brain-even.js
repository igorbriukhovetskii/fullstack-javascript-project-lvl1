#!/usr/bin/env node
import getUserName from '../src/cli.js';
import getGameMessage from '../src/get-game-message.js';
import gameRound from '../src/games/brain-even/game-round.js';
import gameProgress from '../src/game-progress.js';

const userName = getUserName();

console.log(getGameMessage('start-even'));

gameProgress(gameRound, userName);
