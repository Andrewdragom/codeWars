function oddOrEven(array) {
  if (array.length < 1) return "even";
  let x = array.reduce((a, b) => a + b);
  if (Number.isInteger(x / 2)) {
    return "even";
  } else {
    return "odd";
  }
}
