import { authMiddleware } from "../routes/authMiddleware";
import { controller, get, use } from "./decorators";
import { Request, Response } from "express";

@controller('/auth')
class RootController {    
    @get('/')
    getRoot(req: Request, res:Response){
        if(req.session && req.session.loggedIn) {
            res.send(`
                <div>
                    <h1>You are logged in.</h1>
                    <a href='/auth/logout'>Logout</a>
                </div>
            `);
        }else {
            res.send(`
                <div>
                    <h1>You are not logged in.</h1>
                    <a href='/auth/login'>Login</a>
                </div>
            `);
        }
    }

    @get('/protected')
    @use(authMiddleware)
    getProtected(req: Request, res:Response){    
        res.send('Welcome to protected root');
    }
}