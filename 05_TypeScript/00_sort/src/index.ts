import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([100, 3, 224, 55, 1]);
/*
 * To make callable methods on a class, it should be made into an abstract class
 * Abstract classes cannot be creat an instance of an abstract class
 * */
numbersCollection.sort();
console.log(numbersCollection.data);

const charsCollection = new CharactersCollection('Xoushw');
charsCollection.sort();
console.log(charsCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(2992);
linkedList.add(78);
linkedList.add(3);

linkedList.sort();
linkedList.print();
