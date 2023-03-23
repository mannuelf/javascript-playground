// https://egghead.io/lessons/typescript-use-the-nullish-coalescing-operator-in-typescript

const root = document.getElementById('root');

if (root === null) {
  throw Error('Could not fine DOM element root');
}

root.addEventListener('click', e => {
  // ..
});
