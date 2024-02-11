"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const middlewares_1 = require("../services/middlewares");
const home_1 = require("./home");
let app;
beforeAll(() => {
    app = express();
    app.use(bodyParser.json());
    app.use(middlewares_1.utilsHandler);
    app.use(home_1.default);
    app.use(middlewares_1.errorHandler);
});
test('test status code is 200', () => {
    return request(app).get('/').expect(200);
});
//# sourceMappingURL=home.test.js.map