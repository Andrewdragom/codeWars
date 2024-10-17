function booleanToString(b) {
  if (b === true || b === false) {
    b = String(b);
  } else {
    console.log("b is not boolean");
  }
  return b;
}
