const numbers = [2, 4, 5, 7, 10, 1];
console.log("numbers:", numbers);

const sortedNums = numbers.sort();
console.log("sorted:", sortedNums);

const reversedNums = numbers.reverse();
console.log("reversed:", reversedNums);

const students = [
  { id: 1, name: 'Mannuel', surname: 'Ferreira', course: "Front-end Development" },
  { id: 2, name: 'Jack', surname: 'Black', course: "Cyber Security" },
  { id: 3, name: 'Lara', surname: 'Croft', course: "advanced Data Science" }
];

// Sort by alpha: Course name
students.sort(function (a, b) {
  // if a is less than b : false
  // if a greater than b : true

  const courseA = a.course.toUpperCase();
  const courseB = b.course.toUpperCase();

  if (courseA < courseB) return -1;
  if (courseA > courseB) return 1;
});

console.log(students);
