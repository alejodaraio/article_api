import * as restify from "restify";
import Article from "../../models/Article";
import {IRouter} from "../../interfaces/IRouter";

export default class ArticleController implements IRouter {

    public constructor() {

    }

    public get(req: restify.Request, res: restify.Response, next: restify.Next) {
        try {

            let id: number = req.params.id;
            let article = new Article(id, 'Dummy Title', 1482172265, 'dummy body');

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