const getGameMessage = (type, userName, userAnswer, correctAnswer) => {
  let message = '';

  switch (type) {
    case 'win':
      message = 'Correct!';
      break;
    case 'fail':
      message = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      break;
    case 'congrats':
      message = `Congratulations, ${userName}!`;
      break;
    default:
      message = '';
  }

  return message;
};

export default getGameMessage;
