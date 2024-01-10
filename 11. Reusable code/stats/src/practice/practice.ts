import * as DS from 'immutable';
import { Stack } from 'immutable';



export default function practice() {
    console.log(Object.keys(DS));

    let stack = Stack([9,10]);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    console.log(stack.pop());
    console.log(stack);

    let list = DS.List([1,2,3]);
    console.log(list);
}