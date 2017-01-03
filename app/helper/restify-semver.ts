'use strict';

import * as restify from "restify";
import * as semver from "semver";

export default (req: restify.Request, res: restify.Response, next: restify.Next) => {

    let pieces: Array<any> = req.url.replace(/^\/+/, '').split('/');
    let version: string = pieces[0];

    if (!semver.valid(version)) {
        version = version.replace(/v(\d{1})\.(\d{1})\.(\d{1})/, '$1.$2.$3');
        version = version.replace(/v(\d{1})\.(\d{1})/, '$1.$2.0');
        version = version.replace(/v(\d{1})/, '$1.0.0');
    }

    if (semver.valid(version)) {
        req.url = req.url.replace(pieces[0], '');
        req.headers['accept-version'] = version;
    }

    next();
};