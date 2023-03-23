// https://egghead.io/lessons/typescript-ensure-initialization-of-class-instance-properties-in-typescript

class User {
  // username!: string; // Definite Assignment Assertion !

  username: string;

  constructor(username: string) {
    // always initialize default value for props in the constructor.
    this.username = username;
  }

  setUsername(username: string) {
    this.username = username;
  }
}

const user = new User('Jack Chan');
const username = user.username?.toLowerCase();
console.log(`Username: ${username}`);
