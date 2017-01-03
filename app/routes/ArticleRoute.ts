import * as restify from 'restify';
import ArticleController from '../controllers/article/ArticleController'

function articleRoute(api:restify.Server): void {

  let article = new ArticleController();

  api.get({path:'/article/:id'}, article.get);
  api.post({path:'/article'}, article.post);
  api.put({path:'/article'}, article.put);
  api.del({path:'/article'}, article.del);

}

module.exports.routes = articleRoute;