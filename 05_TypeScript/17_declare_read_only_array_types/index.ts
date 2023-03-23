// https://egghead.io/lessons/typescript-declare-read-only-array-types-in-typescript

function instersperse<T>(array: readonly T[], seperator: T): T[] {
  // cannot access mutating arrays here: readonly T[]
  const newArray: T[] = [];

  for (const element of array) {
    if (newArray.length !== 0) {
      newArray.push(seperator);
    }
    newArray.push(element);
  }

  return newArray;
}

const values: string[] = ['A', 'B', 'C', 'D'];

const valuesWithSeperators = instersperse(values, 'X');

console.log(values);
console.log(valuesWithSeperators);
