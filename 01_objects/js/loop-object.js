const car = {
  name: "Porsche",
  model: "911 Torbo S",
  engine: {
    "cylinders": "Twin-turbocharged boxer 6",
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

for (let key in car)
  console.log(key, car[key]);
  //and object is not iterable

for (let key of Object.keys(car))
  console.log(key);

for (let entry of Object.entries(car))
  console.log(entry);

// check if property exists on an object
if ('black' in car) console.log('yes');

/* for (let key of car)
  console.log(key);
  for of can on be used with iterables arrays and maps*/
