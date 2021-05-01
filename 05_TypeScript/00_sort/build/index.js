"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharactersCollection_1 = require("./CharactersCollection");
/*
const numbersCollection = new NumbersCollection([100, 3, 224, 55, 1]);

const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);
*/
var charsCollection = new CharactersCollection_1.CharactersCollection('Xoushw');
var sorter = new Sorter_1.Sorter(charsCollection);
sorter.sort();
