import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

/*
const numbersCollection = new NumbersCollection([100, 3, 224, 55, 1]);

const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);
*/

const charsCollection = new CharactersCollection('Xoushw');
const sorter = new Sorter(charsCollection);
sorter.sort();
console.log(charsCollection.data);
