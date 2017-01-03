import * as restify from 'restify';

export interface IRouter {
    get: (req: restify.Request, res: restify.Response, next: restify.Next) => any;
    post: (req: restify.Request, res: restify.Response, next: restify.Next) => any;
    put: (req: restify.Request, res: restify.Response, next: restify.Next) => any;
    del: (req: restify.Request, res: restify.Response, next: restify.Next) => any;
}