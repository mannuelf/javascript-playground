let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothingMuch2: undefined = undefined;

// built in object
let now: Date = new Date();

// Array
let colors: string[] = ['blue', 'red', 'green'];
let truths: boolean[] = [true, false, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
