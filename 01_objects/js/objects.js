// Object-oriented Programming (OOP), represent real world things/objects as Objects in JS
const circle = {
  radius: 1,
  location: {
    x: 0,
    y: 1,
  },
  isVisible: true,
  draw() {
    // method, call the draw method
    console.log('drawing...')
  },
  move() {
    console.log('moving...');
  }
}

circle.draw();
circle.move();

/*
calling a normal function
function draw();
function move();
*/
