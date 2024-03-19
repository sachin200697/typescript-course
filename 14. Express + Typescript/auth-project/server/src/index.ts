import express, {Request, Response} from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieSession({keys: ['abcdef']}));


app.use(router);
app.listen(3000, ():void=>{
    console.log('listening on port 3000');
    
})