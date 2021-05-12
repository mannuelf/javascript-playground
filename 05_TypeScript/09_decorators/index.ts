@classDecorator
class Jet {
  @colorDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This jet's color is ${this.color}`;
  }

  //@logError('Oops you crashed')
  pilot(
    @paramaterDecorator speed: string,
    @paramaterDecorator landing: boolean,
  ): void {
    if (landing) {
      console.log('🛬 Landing...');
    } else {
      if (speed === 'fast') {
        console.log('✈️  Flying fast');
      } else {
        console.log('✈️  Flying slow...');
      }
    }
  }
}

/*
 * PropertyDecorator
 * writeable: can property be changed
 * enumerable: can property be looked over by a for...in
 * value: current value
 * configureable: can be changed or deleted
 * */

/*
 * Decorator Factory
 * */
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDecorator): void {
    const method = desc.prototype;

    desc.prototype = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

function colorDecorator(target: any, key: string) {
  console.log('Target:', target.color); // cannot access properties or a class, only methods in the prototype.
  console.log('Key:', key);
}

function paramaterDecorator(target: any, key: string, index) {
  console.log(key, index);
}

function classDecorator(constructor: typeof Jet) {
  console.log(constructor);
}

new Jet().pilot('fast', false);
