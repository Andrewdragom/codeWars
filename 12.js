function updateLight(current) {
  let x = current;
  switch (x) {
    case "green":
      x = "yellow";
      return x;
    case "yellow":
      x = "red";
      return x;
    case "red":
      x = "green";
      return x;
  }
}
