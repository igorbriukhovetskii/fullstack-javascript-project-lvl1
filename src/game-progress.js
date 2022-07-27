import getGameMessage from './get-game-message.js';

const gameProgress = (game, userName) => {
  let wins = 0;
  let continueGame = true;

  while (wins < 3 && continueGame) {
    const gameRound = game();

    if (gameRound.isRoundWon) {
      wins += 1;
      console.log(getGameMessage('win'));
    } else {
      continueGame = false;
      console.log(getGameMessage('fail', userName, gameRound.userAnswer, gameRound.correctAnswer));
      return;
    }
  }

  console.log(getGameMessage('congrats', userName));
};

export default gameProgress;
