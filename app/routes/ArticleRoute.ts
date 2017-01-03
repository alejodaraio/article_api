import * as restify from 'restify';
import ArticleControllerV1 from '../versions/v1/controllers/ArticleController'

function articleRoute(api:restify.Server): void {

  let article = new ArticleControllerV1();

  api.get({path:'/article', version: '1.0.0'}, article.get);
}

module.exports.routes = articleRoute;