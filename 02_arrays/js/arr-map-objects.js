const numbers = [1, 2, 3, 4, 5];

const items = numbers
  .filter(n => n >= 0)
  .map(n => ({ value: n })) // js parser need parenthesis or it will see the objects brackets as a new code block.
  .filter(obj => obj.value > 1) // both filtered and items return a new array, so one can chain the methods
  .map(obj => obj.value); // chaining methods

console.log(items);
