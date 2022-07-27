const getGameMessage = (type, userName, userAnswer, correctAnswer) => {
  let message = '';

  switch (type) {
    case 'start-even':
      message = 'Answer "yes" if the number is even, otherwise answer "no".';
      break;
    case 'start-calc':
      message = 'What is the result of the expression?';
      break;
    case 'start-gcd':
      message = 'Find the greatest common divisor of given numbers.';
      break;
    case 'start-progression':
      message = 'What number is missing in the progression?';
      break;
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
