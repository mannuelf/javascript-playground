const first = [{ id: 10}, 1, 2];
const second = [4, 5, 6];

const combined = first.concat(second);
first[0].id = 12;

const sliced = combined.slice(2, 4);
console.log("combined:", combined);
console.log("sliced:", sliced);
