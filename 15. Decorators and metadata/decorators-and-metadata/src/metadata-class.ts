import 'reflect-metadata';

@printMetadata
class Plane {
    color: string = 'red';

    @markFunction('12345')
    fly():void {
        console.log('sttttttttart');        
    }
}

function markFunction(secretValue: string) {
    return function (target: Plane, key: string) {
        //agrument for defineMetadata 
        // 1. name of metadata 
        // 2. value of matadata
        // 3. object on which metadata will be added  
        // 4. key to retrieve it
        Reflect.defineMetadata('secret', secretValue, target, key);
    }
}

function printMetadata(target: typeof Plane) {
    for(let key in target.prototype){
        const secret = Reflect.getMetadata('secret', target.prototype, key);
        console.log(secret);
        
    }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log('my secret', secret);

