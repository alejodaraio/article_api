import * as restify from "restify";
import restifysemver from "./helper/restify-semver";
import {settings} from "./config/config";
import {logger} from "./helper/logger";


export let api = restify.createServer({
    name: settings.name
});

restify.CORS.ALLOW_HEADERS.push('authorization');
api.use(restify.CORS());

//middlewares
api.pre(restify.pre.sanitizePath());
api.pre(restifysemver);

api.use(restify.acceptParser(api.acceptable));
api.use(restify.bodyParser());
api.use(restify.queryParser());
api.use(restify.authorizationParser());
api.use(restify.fullResponse());

//article
let articleRoute = require(__dirname + '/routes/ArticleRoute');
articleRoute.routes(api);

api.listen(settings.port, function () {
    logger.info(`INFO: ${settings.name} is running at ${api.url}`);
});
