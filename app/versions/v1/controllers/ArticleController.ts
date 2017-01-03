import * as restify from "restify";
import ArticleModel from "../model/ArticleModel";
import {IRouter} from "../interfaces/IRouter";

export default class ArticleController implements IRouter {

    readonly version: string;

    public get(req: restify.Request, res: restify.Response, next: restify.Next) {
        try {
            let article = new ArticleModel(1, 'Dummy Title', 1482172265, 'dummy body');
            res.json(200, article);
        } catch (e) {
            res.json(400, e);
        }
    }
}