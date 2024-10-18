function greet(name, owner) {
  let privet;
  if (name === owner) {
    privet = `Hello boss`;
  } else {
    privet = "Hello guest";
  }
  return privet;
}
