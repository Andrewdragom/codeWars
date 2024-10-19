function repeatStr(n, s) {
  let z = s;
  for (let i = n; i > 1; i--) {
    z += s;
  }
  return z;
}
