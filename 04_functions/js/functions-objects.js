function Human(...args) {
  this.name = args[0];
  this.height = args[1];
  this.isAlive = args[2];
  this.walk = () => {
    console.log('walking...');
  }
  this.run = () => {
    console.log('running...');
  }
}


const mannuel = new Human();


console.log(mannuel);
