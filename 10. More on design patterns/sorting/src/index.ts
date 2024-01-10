import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbers = new NumbersCollection([10,0,-1,4,2,6,7]);
numbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection("abdnXXufdYsfkjd");
characters.sort();
console.log(characters.data);


const list = new LinkedList();
list.add(50);
list.add(12);
list.add(45);
list.add(80);
list.add(-10);
list.sort();
list.print();




