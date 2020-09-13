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

car.engine.cylinders = "V8 Twin Turbo";
car["top-speed"] = "200km"

delete car.color;
delete car.height;

console.log(car);
