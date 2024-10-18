function paperwork(n, m) {
  let clearPage;
  if (n < 0 || m < 0) {
    clearPage = 0;
  } else {
    clearPage = n * m;
  }
  return clearPage;
}
