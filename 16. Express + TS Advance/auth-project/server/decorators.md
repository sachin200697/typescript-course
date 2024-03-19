## ES2016 Fix for Controller Decorator
In the upcoming lecture, we will be creating our controller decorator. Your environment most likely targets ES2016 which means that class methods are no longer enumerable. This will later result in Cannot GET /auth/login errors when we attempt to visit that route.

To resolve this, you may change your target to es5 instead of es2016 in the tsconfig.json:

    "target": "es5"

Or, you may modify the code slightly to support ES2016 by swapping out the for loop for Object.getOwnPropertyNames instead:
src/controllers/decorators/controller.ts

for (let key in target.prototype) {
  const routeHandler = target.prototype[key];
  const path = Reflect.getMetadata('path', target.prototype, key);
}
Change to:

Object.getOwnPropertyNames(target.prototype).forEach((key) => {
  const routeHandler = target.prototype[key];
  const path = Reflect.getMetadata('path', target.prototype, key);
});