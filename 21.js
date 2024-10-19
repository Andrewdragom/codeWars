function getMiddle(s) {
  let z = Math.floor(s.length / 2);
  let x;
  if (Number.isInteger(s.length / 2)) {
    x = s[z - 1] + s[z];
  } else {
    x = s[z];
  }
  return x;
}
