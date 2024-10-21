function min(arr, toReturn) {
  let x = Math.min(...arr);
  if (toReturn === "value") {
    return x;
  } else if (toReturn === "index") {
    return arr.indexOf(x);
  }
}
