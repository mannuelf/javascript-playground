import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super(); // reference to the constructor of th parent class
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHandValue = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHandValue;
  }
}

/*
const nums = new NumbersCollection([12, 23, 242, 55, 21, 1]);
nums.length;
*/
