// the rest operator, pass any number of arguemnts, and put them in an array.

function sum(...args) {
  console.log(typeof args, args);

  return args.reduce((a, b) => a + b);
  // can achieve same as below with less code, with modern js.
 /*
  let total = 0;
  for (let value of arguments)
    total += value;
  return total;
 */
}

console.log(sum(1,3,4,5,6,7));
