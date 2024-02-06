interface UserProps {
    name?: string;  //to make this optional we can use ?
    age?:number;
}

// here () => {} is not representing a empty function instead it is representing a type function
type CallbackFunction = () => {};   //it is representing type function

export class User {
    //here [key:string] is telling that on events object we don't know the how many key can 
    // be there and what can be the name of these properties, so just mentioning that there
    // can be any no of key with type as string
    events: {[key:string]: CallbackFunction[]} = {};
    constructor(private data: UserProps) {}
    get(userProps:string): (string|number) {
        return this.data[userProps];
    }
    set(update:UserProps):void{
        // assign(first, second) method copy/replace all properties of second to first
        Object.assign(this.data, update);
    }

    on(eventName: string, callbck: CallbackFunction){

    }
}