import * as restify from "restify";
import {IRouter} from "../../interfaces/IRouter";
import Resource from "../../helper/Resource";

export default class ArticleController implements IRouter {

    public get(req: restify.Request, res: restify.Response, next: restify.Next) {
        try {
            let id: number = req.params.id;
            let r = new Resource(id);
            res.json(200, r.get());
        } catch (e) {
            res.json(400, e);
        }
    }

    public post(req: restify.Request, res: restify.Response, next: restify.Next) {

    }

    public put(req: restify.Request, res: restify.Response, next: restify.Next) {

    }

    public del(req: restify.Request, res: restify.Response, next: restify.Next) {

    }
}