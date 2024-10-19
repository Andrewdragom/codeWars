function countPositivesSumNegatives(input) {
  let x = [];

  if (input === null) {
    return x;
  } else if (input.length > 0) {
    const intPlus = input.filter((el) => el > 0);
    const intMinus = input.filter((el) => el < 0);
    if (intMinus.length > 0) {
      x[0] = intPlus.length;
      x[1] = intMinus.reduce((a, b) => a + b);
    } else {
      x[0] = intPlus.length;
      x[1] = 0;
    }
  }
  return x;
}
