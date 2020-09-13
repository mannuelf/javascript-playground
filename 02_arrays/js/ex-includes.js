const numbers = [1,2,3,4,5,6];

function itIncludes(array, searchElement) {
  for (let element of array)
    if (element === searchElement) {
      console.log(true);
      return true;
    }
  console.log(false);
  return false;
}

itIncludes(numbers, 1)
