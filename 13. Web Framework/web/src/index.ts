import { User } from "./models/User";

const user = new User({name: "Sachin"});

console.log(user.get('name'));
console.log(user.get('age'));

user.set({age:21});

console.log(user.get('name'));
console.log(user.get('age'));

user.set({name: 'john', age: 43});

console.log(user.get('name'));
console.log(user.get('age'));

