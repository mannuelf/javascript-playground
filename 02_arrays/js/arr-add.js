const numbers = [3, 4];

// end
numbers.push(1, 2);

// start
numbers.unshift(1, 2);

// middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);
