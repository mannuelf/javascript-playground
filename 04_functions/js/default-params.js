function interest(principal, rate = 3.5, years = 5) { // if u give default vals, you must give to all following params
  return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 30));
