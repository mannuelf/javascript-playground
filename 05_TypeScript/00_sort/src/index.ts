class Sorter {
  //collection: number[];

  constructor(public collection: number[]) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // compare lefthand side to right hand side
        if (this.collection[j] > this.collection[j + 1]) {
          // get ref to left
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 2, 44, 100, 0]);

sorter.sort();
console.log(sorter.collection);
const letterThing = '+';
console.log(letterThing.charCodeAt());
