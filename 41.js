var humanYearsCatYearsDogYears = function (humanYears) {
  let catYear;
  let dogYear;
  if (humanYears === 1) {
    catYear = 15;
    dogYear = 15;
  } else if (humanYears === 2) {
    catYear = 15 + 9;
    dogYear = 15 + 9;
  } else if (humanYears > 2) {
    catYear = 1 + 14 + 9 + 4 * (humanYears - 2);
    dogYear = 1 + 14 + 9 + 5 * (humanYears - 2);
  }

  return [humanYears, catYear, dogYear];
};
