const cars: string[] = ["Porsche", "Ferrari", "Tesla"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['911'],['Testerossa'],['Model 3']
];

// Help with inference when extracting values
const car = carsByMake[0];
const myCar = carsByMake.pop();

// prevent incompatiable values
// [tsserver 2345] [E] Argument of type 'number' is not assignable to parameter of type 'string[]'
//carsByMake.push(100)

carsByMake.map((car: string): string => {
        return car.toUpperCase();
})

// Flexible types
const importantDates: (Date|string)[] = [new Date(), '2030-11-11'];

