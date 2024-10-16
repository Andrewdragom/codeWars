function findAverage(array) {
  if (array.length < 0) return 0;
  const avr = array.reduce((a, b) => a + b) / array.length;
  return avr;
}
