import { NumbersCollection } from './NumbersCollection';

/*
 * Creates a contract between main class and other classes.
 * user when you have different object that must work together
 * promotes loose coupling
 * */
export interface Sortable {
  length: number;
  compare: (leftIndex: number, rightIndex: number) => boolean;
  swap: (leftIndex: number, rightIndex: number) => void;
}

export abstract class Sorter {
  /*
   * Sets up contract between different classes
   * use when building up a definition of an object
   * Abstract clases stronly couples classe together
   * */
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
