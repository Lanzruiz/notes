/**
 * Example model just to have a model folder
 */

import * as fs from 'fs'
import { get } from 'http'

interface DataObject {
  id: number
  name: string
}

let dataArray: Data[] = []

export default class Notes {
  static message(): string {
    return 'Hello World'
  }

  static addData = (newData: DataObject): Promise<void> => {
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

  static getData = async (): Promise<void> => {
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
  }
}
