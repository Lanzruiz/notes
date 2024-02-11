"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HelloWorld_1 = require("../models/HelloWorld");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send({ message: HelloWorld_1.default.message() });
});
exports.default = router;
//# sourceMappingURL=home.js.map