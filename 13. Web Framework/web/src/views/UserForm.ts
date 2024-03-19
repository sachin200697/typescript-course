import {User, UserProps} from '../models/User'
import { View } from './View';
export class UserForm extends View<User, UserProps>{    
    eventsMap():{[key: string]: ()=>void}{
        return {
            // 'click:button': this.onButtonClick,
            'click:.set-age': this.setRandomAge,
            'click:.set-name': this.onChangeName,
            'click:.save-user': this.onSaveUser,
            'mouseenter:h1': this.onButtonClick
        }
    }
    onChangeName = ():void =>{
        const inputElement = this.parent.querySelector('.user-name');

        // Based on Tomasz Nurkiewiczs answer, the "problem" is that typescript 
        // is typesafe. :) So the document.getElementById() returns the type HTMLElement 
        // which does not contain a value property. The subtype HTMLInputElement does 
        // however contain the value property.
        // <> is the casting operator in typescript.
        const name = (<HTMLInputElement>inputElement).value;
        this.model.set({name});
    }
    setRandomAge = ():void =>{
        console.log('age');
        console.log();
        
        this.model.setRandomAge();        
    }
    onSaveUser = ():void =>{
        this.model.save();
    }
    onButtonClick(): void {
        console.log('clicked');
        
    }

    template(): string{
        return `
            <div>
                <h1>User Form</h1>                           
                <input placeholder=${this.model.get('name')} class='user-name'/>                
                <button class='set-name'>Change Name</button>                
                <button class='set-age'>Set Age</button>
                <button class='save-user'>Save User</button>
            </div>
        `;
    }

    
}