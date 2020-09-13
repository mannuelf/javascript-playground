
const person = {
  firstName: 'Mannuel',
  lastName: 'Ferreira',
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    const parts = value.split(' '); // split and create an array
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

person.fullName = 'Jack Black';
console.log(person); // readonly without get(), not good

// getters => access properties
// setters => change (mutate)
