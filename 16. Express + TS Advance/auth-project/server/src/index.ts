// npm i reflect-metadata 
// enable below two options in tsconfig.json file
// "experimentalDecorators": true,                 
// "emitDecoratorMetadata": true,                  

import express, {Request, Response} from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import './controllers/RootController'
import { AppRouter } from './AppRouter';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieSession({keys: ['abcdef']}));
app.use(AppRouter.getInstance());

app.use(router);
app.listen(5001, ():void=>{
    console.log('listening on port 5001');
    
})