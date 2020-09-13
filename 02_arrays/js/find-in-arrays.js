// indexOf

const digits = [1,2,3,4,5,6];
const animals = ['katt', 'hund', 'hest', 'fisk'];

console.log("digits:", digits.indexOf(2));
// bool expression
console.log("bool:", digits.indexOf(10) !== -1);
console.log("bool:", digits.includes(10));

console.log("animals:", animals.indexOf('hund', 1))
