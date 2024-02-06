// generics for classes
class ArrayOfAnytype<T> {
    constructor(public arr: T[]){}
    get(index:number):T{
        return this.arr[index];
    }
}

class Person {
    constructor(public name: string){}
}

const numbers = new ArrayOfAnytype([1,2,3,4]);  //we don't need to use ArrayOfAnytype<number>, as typescript will automatically identify that it is of type number
const strings = new ArrayOfAnytype(['a','b','c','d'])
const persons = new ArrayOfAnytype([new Person("John"), new Person("Bigies"), new Person("Marcelo"), new Person("Don"), 'sac']);

console.log(numbers.get(2));
console.log(strings.get(3));
console.log(persons.get(4));

// generics for functions
function printAnything<T>(data:T[]):void{
    for(let val of data){
        console.log(val);        
    } 
}

printAnything<number>([1,2,3,4]);
printAnything(['sac','hin','kum','ar'])

//Generic constraints

class Dog {
    print():void {
        console.log('It is Dog class print method');
        
    }
}

class Cat {
    print():void {
        console.log('It is Cat class print method');
        
    }
}

interface Printable {
    print():void;
}
function printAll<T extends Printable>(data:T[]) {
    for(let val of data){
        //give err: Property 'print' does not exist on type 'T' 
        //to avoid this we need to use an interface that insures that a 
        //required property is present 
        val.print();    
    }
}

printAll([new Cat(), new Dog()]);
// printAll([1,2,3]) //gives error: Type 'number' is not assignable to type 'Printable'.

