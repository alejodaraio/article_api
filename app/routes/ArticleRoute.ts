import * as restify from "restify";
import ArticleController from "../controllers/article/ArticleController";

function articleRoute(api: restify.Server): void {

    let article = new ArticleController();

    api.get({path: '/articles/:id'}, article.get);
    api.post({path: '/articles'}, article.post);
    api.put({path: '/articles'}, article.put);
    api.del({path: '/articles'}, article.del);
    api.get({path: '/articles'}, article.list);
}

module.exports.routes = articleRoute;