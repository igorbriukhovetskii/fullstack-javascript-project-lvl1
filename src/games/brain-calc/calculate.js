const calculate = (num1, num2, operator) => {
  let result = null;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = null;
  }

  return result.toString();
};

export default calculate;
