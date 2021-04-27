const drink = {
  color: 'brown',
  carbonate: false,
  sugar: 0,
};

// type alias
type Drink = [string, boolean, number];

// tuples
const fanta: Drink = ['orange', true, 60];
const tea: Drink = ['brown', true, 0];
