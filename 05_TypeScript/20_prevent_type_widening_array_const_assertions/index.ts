// https://egghead.io/lessons/typescript-prevent-type-widening-of-array-literals-with-typescript-s-const-assertions

const ORIGIN = [0, 0] as const;

// not allowed thanks to const assertion
// ORIGIN[0] = 1;

const digitNames = [
  [0, 'zero'],
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
] as const;
