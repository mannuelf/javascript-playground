// https://egghead.io/lessons/typescript-create-private-class-fields-using-typescript-s-private-modifier

class Counter {
  #count = 0;

  increment() {
    this.#count += 1;
  }

  get count() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.count);
