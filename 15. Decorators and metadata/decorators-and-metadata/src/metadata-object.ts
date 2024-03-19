// to run this file in cmd type ts-node metadata.ts

//this statement will automatically provide a global variale name Reflect
import 'reflect-metadata';  

let plane = {
    color: 'red'
};

//this will add property name with value as sachin inside plane object
// but we can not see this new property directly
Reflect.defineMetadata('name', 'sachin', plane);

console.log(plane); //{ color: 'red' }

const value = Reflect.getMetadata('name', plane);
console.log(value); //sachin

