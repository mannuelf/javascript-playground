const nums = [1,2,3,4,5,6,7,-2,8,9,10];

const atLeastOnePositive = nums.some(function(val) {
  return val >= 0;
});

console.log(atLeastOnePositive);

// every, checks if every element in array is positive
// some, checks if at least one element matches
