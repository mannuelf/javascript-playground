import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([100, 3, 224, 55, 1]);

const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);
