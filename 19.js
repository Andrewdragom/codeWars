function positiveSum(arr) {
  arr.push(0);
  let sum =
    arr.length != 0
      ? arr.filter((el) => el >= 0).reduce((a, b) => a + b)
      : (arr = 0);
  return sum;
}
