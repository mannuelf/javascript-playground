// https://egghead.io/lessons/typescript-create-private-class-fields-using-typescript-s-private-modifier

function createCounter() {
  let value = 0;

  return {
    increment() {
      value++;
    },
    get count() {
      return value;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.count);
