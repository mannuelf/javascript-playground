// https://egghead.io/lessons/typescript-declare-read-only-tuple-types-in-typescript

function swap<T, U>(tuple: readonly [T, U]): [U, T] {
  const [first, second] = tuple;
  return [second, first];
}

const keyValuePair: readonly [number, string] = [1, 'one'];
const valueKeyPair = swap(keyValuePair);

console.log(keyValuePair);
console.log(valueKeyPair);
