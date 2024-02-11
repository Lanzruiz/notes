"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const log4js = require("log4js");
const requireEnv = require("require-environment-variables");
const dotenv = require("dotenv");
dotenv.config();
requireEnv([]);
log4js.configure({
    appenders: {
        stdout: { type: 'stdout' }
    },
    categories: {
        default: { appenders: ['stdout'], level: 'info' }
    }
});
const log = log4js.getLogger('Server');
const port = process.env.PORT || 3000;
app_1.default.listen(port, () => {
    log.info('App is running at http://localhost:%d in %s mode', port, app_1.default.get('env'));
    log.info('Press CTRL-C to stop\n');
});
//# sourceMappingURL=server.js.map