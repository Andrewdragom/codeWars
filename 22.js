function squareSum(numbers) {
  return numbers.length > 0
    ? numbers.map((el) => el * el).reduce((a, b) => a + b)
    : (numbers = 0);
}
