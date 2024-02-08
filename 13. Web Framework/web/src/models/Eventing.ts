// here () => {} is not representing a empty function instead it is representing a type function
// type CallbackFunction = () => {};   //it is representing type function that takes no agrument and returns a object
type CallbackFunction = () => void; //takes not args and ruturn nothing

export class Eventing {
  //here [key:string] is telling that on events object we don't know the how many key can
  // be there and what can be the name of these properties, so just mentioning that there
  // can be any no of key with type as string
  events: { [key: string]: CallbackFunction[] } = {};
  on = (eventName: string, callbck: CallbackFunction): void => {
    const eventHandlers = this.events[eventName] || [];
    eventHandlers.push(callbck);
    this.events[eventName] = eventHandlers;
  };

  trigger = (eventName: string): void => {
    const eventHandlers = this.events[eventName];
    if (!eventHandlers || eventHandlers.length === 0) {
      return;
    }
    eventHandlers.forEach((callback) => {
      callback();
    });
  }
}
