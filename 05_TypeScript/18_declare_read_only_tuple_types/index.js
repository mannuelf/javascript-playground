"use strict";
// https://egghead.io/lessons/typescript-declare-read-only-tuple-types-in-typescript
function swap(tuple) {
    const [first, second] = tuple;
    return [second, first];
}
const keyValuePair = [1, 'one'];
const valueKeyPair = swap(keyValuePair);
console.log(keyValuePair);
console.log(valueKeyPair);
