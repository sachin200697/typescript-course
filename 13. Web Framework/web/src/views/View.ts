import { HasId, Model } from "../models/Model";

// import { User } from "../models/User";

// <T extends Model<K>, K extends HasId> is like :
// we are passing two generic types T and K, now K is being used by Model class 
// generic type 
// here instead of using T extends Model  we can create a interface that holds
// all properties that Model class has and can use new interface in place of Model
export abstract class View<T extends Model<K>, K extends HasId> {
    // abstract eventsMap():{[key: string]: ()=>void};
    eventsMap = ():{[key: string]: ()=>void} =>{
        return {};
    };
    regions: {[key:string]: Element} = {};  //for nested components
    abstract template():string;
    constructor(public parent: Element, public model: T){
        this.bindModel();
    }    
    bindModel = ():void =>{
        this.model.on('change', ()=>{
            this.render();
        })
    }

    bindEvents(fragment: DocumentFragment): void{
        let eventsMay = this.eventsMap();
        for(let eventKey in eventsMay){
            let [eventName, selector] = eventKey.split(':');                        
            fragment.querySelectorAll(selector).forEach(element=>{
                element.addEventListener(eventName, eventsMay[eventKey]);
            })
        }
    }

    regionsMap = ():{[key:string]: string} =>{
        return {};
    }

    mapRegions(fragment: DocumentFragment):void {
        const regionsMap = this.regionsMap();

        for(let key in regionsMap){
            let selector = regionsMap[key];
            let element = fragment.querySelector(selector);

            if(element){
                this.regions[key] = element;
            }
        }
    }
    onRender():void{
        
    }
    render(): void {
        this.parent.innerHTML = '';

        // const templateElement = document.createElement('div');
        // templateElement.innerHTML = this.template();
        // this.parent.append(templateElement);
        // we can use div to append the content or can 
        // use template like below(with some difference)
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        this.onRender();
        this.parent.append(templateElement.content);
        // console.log(this.parent);
        
    }
}