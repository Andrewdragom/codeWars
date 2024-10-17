function getGrade(s1, s2, s3) {
  let avr = (s1 + s2 + s3) / 3;
  if (avr >= 100 || avr >= 90) {
    avr = "A";
  } else if (avr < 90 && avr >= 80) {
    avr = "B";
  } else if (avr < 80 && avr >= 70) {
    avr = "C";
  } else if (avr < 70 && avr >= 60) {
    avr = "D";
  } else if (avr < 60) {
    avr = "F";
  }
  return avr;
}
