// https://egghead.io/lessons/typescript-use-the-nullish-coalescing-operator-in-typescript

let thing: unknown;

thing = undefined;
thing = 'That thing, that thing, that thiiiiiing';
if (typeof thing === 'string') {
  const uppercasText = thing.toUpperCase();
  console.log(uppercasText);
}

// assertion signature
function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw Error(message);
  }
}

// function overload signature
function range(from: number, to: number): number[];
function range(from: unknown, to: unknown): number[] {
  assert(typeof from === 'number', 'from must be a number');
  assert(typeof to === 'number', 'to must be a number');

  const values: number[] = [];
  for (let i = from; i < to; i++) {
    values.push(i);
  }
  return values;
}

console.log(range('A' as any, 'Z' as any));
