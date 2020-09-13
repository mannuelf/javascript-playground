function add() {
  //console.log(typeof arguments, arguments);
  let total = 0;
  for (let value of arguments)
    total += value;
  return total;
}

console.log(add(1, 2, 4))
