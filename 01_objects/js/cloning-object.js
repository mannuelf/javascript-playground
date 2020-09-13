const car = {
  name: "Porsche",
  model: "911 Torbo S",
  engine: {
    "cylinders": "Twin-turbo charged boxer 6",
    "bore": "102.0 mm",
    "stroke": "76.4 mm",
    "power": "640 hp",
    "power-rpm": "6,750 rpm",
    "engine-speed": "7,200 rpm",
    "torque": "590 lb-ft",
    "torque-at-rpm": "2,500 - 4,000 rpm",
    "power-per-liter": "168.4 hp/l",
    "power-to-weight-ratio": "5.7 lb/hp",
  },
  "color": "Black",
  "top-speed": "330km",
  "height": "1.3003cm"
}

/*
1.
const porsche = {};
for (let key in car) // old way
  porsche[key] = car[key];

console.log("1", porsche);
// porsche['color'] = porsche['color'];
*/

/*
const porsche = Object.assign({}, car); // takes all src object and props and stores it in a variable
console.log("2", porsche);
*/

const porsche = {...car};
console.log("3", porsche);
