import axios from 'axios';
import { User, UserProps } from "./models/User";
import { Collection } from './models/Collection';
import { UserForm } from './views/UserForm';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';



// const user = User.buildUser({id: 1});
// user.on('save', ()=>{
//     console.log(user);  
// })
// user.on('change', ()=>{
//     console.log(user); 
// })
// user.fetch();

const collection = User.buildUserCollection();
collection.on('change', ()=>{
    // console.log(collection);
    
});
collection.fetch();
const elememnt = document.getElementById('root') as HTMLElement;

const user = User.buildUser({age: 20, name: 'John'});
// const userForm = new UserForm(elememnt, user);
// userForm.render();

// const userEdit = new UserEdit(elememnt, user);
// userEdit.render();
// console.log(userEdit);

let users = new Collection('http://localhost:5007/users', (json:UserProps)=>User.buildUser(json));
users.fetch();
users.on('change', ()=>{
    if(elememnt){
        new UserList(elememnt, users).render();
    }
});
