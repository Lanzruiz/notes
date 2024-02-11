'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value)
            }).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = require('express')
const Notes_1 = require('../models/Notes')
const router = express_1.Router()
router.post('/', (req, res) =>
  __awaiter(this, void 0, void 0, function*() {
    const record = req.body
    const obj = {
      id: record.id,
      name: record.name
    }
    const dataResponse = yield Notes_1.default.addData(obj)
    res.send({ message: obj })
  })
)
router.get('/', (req, res) =>
  __awaiter(this, void 0, void 0, function*() {
    const dataResponse = yield Notes_1.default.getData()
    res.send({ message: dataResponse })
  })
)
router.get('/:id', (req, res) =>
  __awaiter(this, void 0, void 0, function*() {
    const dataResponse = yield Notes_1.default.getDataId(req.params.id)
    res.send({ message: dataResponse })
  })
)
exports.default = router
//# sourceMappingURL=notes.js.map
