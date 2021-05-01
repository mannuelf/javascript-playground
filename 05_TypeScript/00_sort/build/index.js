"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
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
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(2992);
linkedList.add(78);
linkedList.add(3);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
