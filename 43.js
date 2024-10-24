//return the total number of smiling faces in the array
function countSmileys(arr) {
  if (arr.length < 0) {
    return 0;
  }

  let x = arr.filter(
    (el) =>
      el === ":)" ||
      el === ":D" ||
      el === ";-D" ||
      el === ":~)" ||
      el === ";~D" ||
      el === ":-D" ||
      el === ";-)" ||
      el === ";)" ||
      el === ":~D" ||
      el === ";D" ||
      el === ";D" ||
      el === ":-)" ||
      el === ";~)"
  );
  return x.length;
}
