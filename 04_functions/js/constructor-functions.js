// Constructor Function

// Factory Function, camelCase
function createHuman(name, height, isAlive) {
  return {
    name: name,
    height: height,
    isAlive: isAlive,
    walk() {
      console.log('walking...')
    },
    run() {
      console.log('running...');
    }
  }
}

const david = createHuman('David Blaine', 7, true);
console.log("factory:", david);




// Constructor function, PascalCase
// this is a referance to the objec that is executing this code/function
function Human(name, height, isAlive = true) {
  this.name = name;
  this.height = height;
  this.isAlive = isAlive;

  this.walk = function() {
    console.log('walking...');
  }

  return this; // this will happen automatically
}

const jack = new Human('Jack Black', 4.6, true);

console.log("human:", jack);
console.log("human:", jack.walk());

/*
new, the operator will do 3 things.
1. creates and empty js object let x = {}
2. set "this" to point to the new empty object
3. will return this from the new object
*/
