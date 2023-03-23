"use strict";
// https://egghead.io/lessons/typescript-declare-read-only-array-types-in-typescript
function instersperse(array, seperator) {
    const newArray = [];
    for (const element of array) {
        if (newArray.length !== 0) {
            newArray.push(seperator);
        }
        newArray.push(element);
    }
    return newArray;
}
const values = ['A', 'B', 'C', 'D'];
values.push('E');
const valuesWithSeperators = instersperse(values, 'X');
console.log(values);
console.log(valuesWithSeperators);
