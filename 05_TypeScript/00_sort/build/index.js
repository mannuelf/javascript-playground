"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([100, 3, 224, 55, 1]);
/*
 * To make callable methods on a class, it should be made into an abstract class
 * Abstract classes cannot be creat an instance of an abstract class
 * */
numbersCollection.sort();
console.log(numbersCollection.data);
var charsCollection = new CharactersCollection_1.CharactersCollection('Xoushw');
charsCollection.sort();
console.log(charsCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(2992);
linkedList.add(78);
linkedList.add(3);
linkedList.sort();
linkedList.print();
