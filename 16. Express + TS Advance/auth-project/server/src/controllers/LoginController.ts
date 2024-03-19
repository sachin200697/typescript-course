import { Router, Request, Response, NextFunction } from "express";
import { controller, get, post, validator, use } from "./decorators";

interface RequestWithBody extends Request {
    body: {[key:string]: string|undefined};
}

function logger(req: Request, res: Response, next: NextFunction) {
    console.log('This is middleware function');
    next();
}

@controller('/auth')
class LoginController {
    // normally this add method should give error because it does send 
    // any response to the request of user
    // to do this we need to make sure inside the routes decorator to handle this case
    // @get('/')
    // add(a:number, b:number){
    //     return a+b;
    // }

    @get('/login')
    @use(logger)
    getLogin(req: Request, res: Response) {        
        res.send(`
            <div>
                <form method='POST'>
                    <label>Email: </label>
                    <input name='email'/> <br/><br/>
                    <label>Password: </label>
                    <input name='password' type='password'/><br/><br/>
                    <button>Submit</button>
                </form>
            </div>
        `);        
    }

    @post('/login')
    @validator('email', 'password')
    postLogin(req: RequestWithBody, res:Response){
        const {email, password} = req.body;    
        if(email && password && email === 'test@test.com' && password === 'test') {
            req.session = {loggedIn : true};
            res.redirect(`/auth`);
        }else {
            res.status(402).send('Please provide valid email and password');
        }
    }

    @get('/logout')
    getLogout(req: Request, res:Response){    
        req.session = undefined;
        res.redirect(`/auth`);    
    }
}