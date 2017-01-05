import * as restify from "restify";
import {IRouter} from "../../interfaces/IRouter";
import ArticleModel from "../../models/Article";

export default class ArticleController implements IRouter {

    public get(req: restify.Request, res: restify.Response, next: restify.Next) {
        try {
            let id: number = req.params.id;
            let article = new ArticleModel(id, 'title', 99999999, 'body');
            res.json(200, article);
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