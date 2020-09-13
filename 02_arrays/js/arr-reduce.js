const numbers = [1,2,3,4,5];

let sum = 0;
for (let n of numbers)
  sum += n; // addition assignment operator

console.log("loopin:", sum);

const sumUp = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log("reduce:", sumUp);
