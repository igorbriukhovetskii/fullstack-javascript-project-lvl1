const getGreatestCommonDenominator = (num1, num2) => {
  if (num2 === 0) {
    return num1.toString();
  }

  return getGreatestCommonDenominator(num2, (num1 % num2));
};

export default getGreatestCommonDenominator;
