import express from 'express';

// we are defining this AppRouter class to create a singleton instance of router object
// and we can use it everywhere
export class AppRouter {
    private static instance: express.Router;

    static getInstance():express.Router {
        //for static variables we can use class name or also this keywork to access it
        if(!AppRouter.instance){
            AppRouter.instance = express.Router();
        }
        return this.instance;   //it is fine to use this for static variables
    }
}