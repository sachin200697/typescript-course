export class Attributes<T extends Object> {
  constructor(private data: T) {}

  // get(userProps: string): string | number {
  //     return this.data[userProps];
  // }
  // problem in this method is, when we do: const id = obj.get('id');, in this
  // case type of const id will also be (string|number), so we don't want to
  // do it, so need to do like below code to return the valid type
  get = <K extends keyof T>(userProps: K): T[K] => {
    return this.data[userProps];
  };

  set = (update: T): void => {
    // assign(first, second) method copy/replace all properties of second to first
    // here this.data will give an error, so to over come from the error,
    // we need to change the generic <T> to <T extends Object>
    Object.assign(this.data, update);
  };

  getAll = (): T => {
    return this.data;
  };
}

//learning
function stringAsTypes() {
  // we can create types from strings as well
  // example
  type MatchName = "sachin"; //now MatchName is denoting type of sachin

  const fun = (name: MatchName): void => {
    console.log(name);
  };
  // fun('pradeep'); //gives error as we can only pass 'sachin' only
  fun("sachin"); // will print sachin
  fun("naman" as MatchName); // can also do this // it will print naman

  // keys of object are string in js
  // here is the proof
  let obj = {};
  obj[5] = "red";
  console.log(obj[5], obj["5"], typeof Object.keys(obj)[0]); //red red string
}

// stringAsTypes();
