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
const fs = require('fs')
let dataArray = []
class Notes {
  static message() {
    return 'Hello World'
  }
}
Notes.addData = newData => {
  return new Promise((resolve, reject) => {
    if (newData) {
      dataArray.push(newData)
      fs.writeFile('./dataArray.json', JSON.stringify(dataArray), err => {
        if (err) throw err
      })
      resolve()
    } else {
      reject(new Error('Invalid data'))
    }
  })
}
Notes.getData = () =>
  __awaiter(this, void 0, void 0, function*() {
    try {
      const data = fs.readFileSync('./dataArray.json', {
        encoding: 'utf8',
        flag: 'r'
      })
      const obj = JSON.parse(data)
      return obj
    } catch (err) {
      console.error(err)
    }
  })
exports.default = Notes
//# sourceMappingURL=Notes.js.map
