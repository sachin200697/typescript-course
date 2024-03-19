@classDecorator
class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `Boat is of ${this.color} color`;
  }

  //to use decorators we need to use below config inside tsconfig.json file
  // "experimentalDecorators": true,
  // "emitDecoratorMetadata": true,
  @myDecorator
  //target {}  // here it is protorype object if we run this code in browser then, it will point to an object
  //key pilot
  pilot(): void {
    console.log("Sachin");
  }

  @logErrorDecorator
  distanceTravelled(): void {
    throw new Error("Trying to run the boat on sand");
  }

  @logErrorDecoratorWithArgument("Opps! Boat can not be used on sand")
  distanceTravelled2(@parameterDecorator fromLocation: string): void {
    throw new Error("Trying to run the boat on sand");
  }
}

// decorators only run onece when we define the class/property
// decorator will be executed even before creating any variable or object of Boat
// decorators are automatically provided three agruments=>
// 1. prototype object of the object which is using decorator function,
//    in this case Boat.prototype is provided as firts agrument and target is pointing
//    to it in myDecorator function hhfinal settlement
// 2. name of property: second agrument is the name of property on which we are using
//    decorator. In this case pilot is the name and key is pointing to this name in
//    myDecorator function
// 3. property descriptor:
function myDecorator(target: any, key: string): void {
  console.log("target", target);
  console.log("key", key);
}

function logErrorDecorator(
  target: any,
  key: string,
  desc: PropertyDescriptor
): void {
  console.log(desc);
  //because we are using this decorator on distanceTravelled method so value of desc is:
  /*
    {        
        value: [Function: distanceTravelled],
        writable: true,   //it means we can modify the value or not
        enumerable: false, //we can use loop or not
        configurable: true    // we can change the definition or delete the property or not
    }
    */

  let method = desc.value; // it is equal to distanceTravelled

  desc.value = function (): void {
    try {
      method();
    } catch (error) {
      console.log("some error occured, while running the boat");
    }
  };
}

function logErrorDecoratorWithArgument(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    let method = desc.value;
    desc.value = function (): void {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key); //distanceTravelled2
  console.log(index); // 0 for the first argument
  // 1 for the second agrument
  // .....
}

// here for constructor we can give type as Function as well
function classDecorator(constructor: typeof Boat): void {
  //here constructor is refering to the constructor function of Boat class
  console.log(constructor); //[class Boat]
}

let boat = new Boat();
boat.distanceTravelled();
boat.distanceTravelled2("mumbai");

// -----------------------------------------------
function learning1() {
  //PropertyDecorator
  let a = { name: "sahcin", age: 22 };
  console.log(Object.getOwnPropertyDescriptor(a, "name"));
  /*
    {        
        value: 'sahcin',
        writable: true,   //it means we can modify the value or not
        enumerable: true, //we can use loop or not
        configurable: true    // we can change the definition or delete the property or not
    }
    */

  // we can also change properties like this
  // if writable: false then we can not change the property value
  // Object.defineProperties(a, 'name', {writable: false, value: 'naman', enumerable: true, configurable: false});
}

// learning1()
