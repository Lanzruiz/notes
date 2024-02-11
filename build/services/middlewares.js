"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js = require("log4js");
const logger = log4js.getLogger('Middleware');
exports.utilsHandler = (req, res, next) => {
    res.sendError = (err, statusCode = 400) => {
        return res.status(statusCode).send({ error: err });
    };
    return next();
};
exports.notFoundHandler = (req, res) => {
    res.sendError('That endpoint does not exist.', 404);
};
exports.errorHandler = (err, req, res, next) => {
    logger.error('Error middleware', err);
    res.sendError('Houston, we have a problem!', 500);
};
//# sourceMappingURL=middlewares.js.map