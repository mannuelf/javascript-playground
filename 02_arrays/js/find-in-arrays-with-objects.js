// find object props in an array,
// returns first element that matches the criteria

const students = [
  { id: 1, name: 'Mannuel', surname: 'Ferreira', course: "Front-end Development"},
  { id: 1, name: 'Jack', surname: 'Black', course: "Cyber Security"}
];

const student = students.find(function(student) {
  return student.name === 'Mannuel'
});

// with arrow function
const jack = students.find(student => student.name === 'Jack');

console.log(student);
console.log(jack);
