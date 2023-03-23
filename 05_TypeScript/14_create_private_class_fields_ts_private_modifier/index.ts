// https://egghead.io/lessons/typescript-create-private-class-fields-using-typescript-s-private-modifier

class Counter {
  private _value = 0;

  increment() {
    this._value += 1;
  }

  get count() {
    return this._value;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();

counter['_value'] = 99;
console.log(counter.count);
