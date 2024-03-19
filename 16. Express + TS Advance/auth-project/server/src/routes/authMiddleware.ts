import { Request, Response, NextFunction } from "express";
export function authMiddleware(req: Request, res: Response, next: NextFunction){
    if(req.session && req.session.loggedIn){
        next();
        return;
    }
    res.status(403).send('You are not authorize to access this page');
}