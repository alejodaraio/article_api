import * as restify from "restify";
import {IRouter} from "../../interfaces/IRouter";
import ArticleModel from "../../models/Article";
import {dynamodbClient} from "../../resource/dynamodb";

export default class ArticleController implements IRouter {

    public get(req: restify.Request, res: restify.Response, next: restify.Next) {
        try {
            let id: number = parseInt(req.params.id);
            let article = new ArticleModel(id, 'title', 99999999, 'body');

            let params = {
                TableName: 'articles',
                Key: {
                    'id': id
                }
            };

            dynamodbClient.get(params, (err, data) => {
                if (err) {
                    res.json(400, err);
                } else {
                    res.json(200, data);
                }
            });


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

    public list(req: restify.Request, res: restify.Response, next: restify.Next) {
        let params = {
            TableName: 'articles'
        };
        dynamodbClient.scan(params, (err, data) => {
            if (err) {
                res.json(200, err);
            } else {
                res.json(200, data.Items);
            }
        });
    }
}