// Factory function, like a factory create objects
// create object and returns, much simpler and less convoluted than classes.

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

const mannuelFerreira = createHuman('Mannuel Ferreira', 4, false);
const jackBlack = createHuman("Jack Black", 10, true)

console.log("mannuel", mannuelFerreira)
console.log("mannuel", mannuelFerreira.run());
console.log(jackBlack);

/*
// with args spread operator
function createHuman(...args) {
  return {
    name: args[0],
    height: args[1],
    isAlive: args[2],
    walk() {
      console.log('walking...')
    },
    run() {
      console.log('running...');
    }
  }
}
*/
