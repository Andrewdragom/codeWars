function removeEveryOther(arr) {
  let x = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    x.push(arr[i]);
  }
  return x;
}
