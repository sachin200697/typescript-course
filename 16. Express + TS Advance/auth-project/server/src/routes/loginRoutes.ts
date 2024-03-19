import { Router, Request, Response } from "express";
import { authMiddleware } from "./authMiddleware";

const router = Router();

interface RequestWithBody extends Request {
    body: {[key:string]: string|undefined};
}

router.get('/', (req: Request, res:Response)=>{
    if(req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <h1>You are logged in.</h1>
                <a href='/logout'>Logout</a>
            </div>
        `);
    }else {
        res.send(`
            <div>
                <h1>You are not logged in.</h1>
                <a href='/login'>Login</a>
            </div>
        `);
    }
});

router.get('/login', (req: Request, res:Response)=>{
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
});

router.post('/login', (req: RequestWithBody, res:Response)=>{
    const {email, password} = req.body;

    if(email && password && email === 'test@test.com' && password === 'test') {
        req.session = {loggedIn : true};
        res.redirect(`/`);
    }else {
        res.status(402).send('Please provide valid email and password');
    }
})

router.get('/logout', (req: RequestWithBody, res:Response)=>{    
    req.session = undefined;
    res.redirect(`/`);    
})

router.get('/protected', authMiddleware, (req: RequestWithBody, res:Response)=>{    
    res.send('Welcome to protected root');
})
export {router};