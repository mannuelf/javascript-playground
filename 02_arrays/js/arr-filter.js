const numbers = [1,2,3,4,5, -5, -6];

const filtered = numbers.filter(function(val) {
  return val >= 0;
});

console.log(filtered);
