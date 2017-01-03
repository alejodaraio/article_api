import * as restify from 'restify';

export interface IRouter {
    version: string;
    get: (req: restify.Request, res: restify.Response, next: restify.Next) => any;
}