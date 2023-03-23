"use strict";
// https://egghead.io/lessons/typescript-ensure-initialization-of-class-instance-properties-in-typescript
var _a;
class User {
    constructor(username) {
        // this.username = username;
    }
    setUsername(username) {
        this.username = username;
    }
}
const user = new User('Jack Chan');
const username = (_a = user.username) === null || _a === void 0 ? void 0 : _a.toLowerCase();
console.log(`Username: ${username}`);
