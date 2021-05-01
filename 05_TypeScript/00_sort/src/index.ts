import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

/*
const numbersCollection = new NumbersCollection([100, 3, 224, 55, 1]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
*/

/*
const charsCollection = new CharactersCollection('Xoushw');
const sorter = new Sorter(charsCollection);
sorter.sort();
*/

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(2992);
linkedList.add(78);
linkedList.add(3);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
