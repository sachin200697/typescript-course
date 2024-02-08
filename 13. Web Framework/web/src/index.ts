import axios from 'axios';
import { User } from "./models/User";


const user = new User({name: 'Hanuman', age: 1000});
user.on('save', ()=>{
    console.log(user);
    
})

user.save();