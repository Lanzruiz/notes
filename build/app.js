'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const express = require('express')
const bodyParser = require('body-parser')
const log4js = require('log4js')
const middlewares_1 = require('./services/middlewares')
const notes_1 = require('./controllers/notes')
const logger = log4js.getLogger('Express')
const app = express()
app.disable('X-Powered-By')
app.use(log4js.connectLogger(logger, { level: 'auto' }))
app.use(bodyParser.json())
app.use(middlewares_1.utilsHandler)
app.use('/notes', notes_1.default)
app.use(middlewares_1.notFoundHandler)
app.use(middlewares_1.errorHandler)
exports.default = app
//# sourceMappingURL=app.js.map
