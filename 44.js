function sumArray(array) {
  if (array === null || array === undefined) {
    return 0;
  } else if (array.length === 1 || array.length < 1) {
    return 0;
  }
  return (
    array.reduce((a, b) => a + b) - Math.min(...array) - Math.max(...array)
  );
}
