
const person = {
  firstName: 'Mannuel',
  lastName: 'Ferreira',
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    if (typeof value !== 'string')
      throw new Error('Value is not a string');

    const parts = value.split(' '); // split and create an array
    if (parts.length !== 2)
      throw new Error('Enter first and last name');

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

try {
  person.fullName = '';
} catch (e) {
  alert(e);
  console.log(e);
}
console.log(person); // readonly without get(), not good

// getters => access properties
// setters => change properties (mutate)
