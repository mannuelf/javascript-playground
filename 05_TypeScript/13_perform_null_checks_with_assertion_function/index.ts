// https://egghead.io/lessons/typescript-use-the-nullish-coalescing-operator-in-typescript

function assertIsNonNullish<T>(
  value: T,
  message: string,
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw Error(message);
  }
}

const root = document.getElementById('root');
assertIsNonNullish(root, 'Could not find DOM element root');

// if (root === null) {
//   throw Error('Could not fine DOM element root');
// }

root.addEventListener('click', e => {
  // ... som logic here ...
});
