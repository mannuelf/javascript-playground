"use strict";
var Sorter = /** @class */ (function () {
    //collection: number[];
    function Sorter(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // compare lefthand side to right hand side
                if (this.collection[j] > this.collection[j + 1]) {
                    // get ref to left
                    var leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 2, 44, 100, 0]);
sorter.sort();
console.log(sorter.collection);
var letterThing = '+';
console.log(letterThing.charCodeAt());
