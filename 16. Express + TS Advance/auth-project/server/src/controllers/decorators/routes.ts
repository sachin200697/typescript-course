import 'reflect-metadata';
import { Methods } from '../../Methods';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

interface RouterHandlerDescripter extends PropertyDescriptor {
    value?: RequestHandler  //to insure that if we are making a function a route then
    // it should take Request and Response and should send some response
    // other it will not give any error if we make add(a:number, b:number) function
}
function routerBind(method: string) {
    return function (path: string) {
        return function (target: any, key: string, desc: RouterHandlerDescripter) {
            Reflect.defineMetadata(MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys.method, method, target, key);
        }
    }
}

export const get = routerBind(Methods.get);
export const post = routerBind(Methods.post);
export const put = routerBind(Methods.put);
export const patch = routerBind(Methods.patch);
export const del = routerBind(Methods.delete);
