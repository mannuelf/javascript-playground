import 'reflect-metadata';

/*
 * Reflect adds meta data to prototype object as seperate object
 * */
const jet = {
  color: 'chrome',
};

Reflect.defineMetadata('note', 'hello there', jet);
Reflect.defineMetadata('height', 100, jet);

console.log('✈️ ', jet);

const note = Reflect.getMetadata('note', jet);
const height = Reflect.getMetadata('height', jet);

console.log('✈️  ', note, height);

// with class
@printMetaData
class Plane {
  color: string = 'red';

  @markFunction('Vrooooom')
  fly(): void {
    console.log('✈️  Flying...');
  }
}

function markFunction(secretInfo: string) {
  // Factory Decorator
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);

function printMetaData(target: typeof Plane) {
  for (let key in target.prototype) {
    Reflect.getMetadata('secret', target.prototype, key);
  }
}
