/**
 * Example model just to have a model folder
 */

import * as fs from 'fs'
import { get } from 'http'

interface DataObject {
  id: number
  title: string
  body: string
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

  static getDataId = async (id: number): Promise<void> => {
    try {
      const data = fs.readFileSync('./dataArray.json', {
        encoding: 'utf8',
        flag: 'r'
      })

      const obj = JSON.parse(data)

      let entry = obj.filter(function(item) {
        return item.id == id
      })[0]

      console.log(entry)

      return entry
    } catch (err) {
      console.error(err)
    }
  }

  static updateData = (updateData: DataObject): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (updateData) {
        // dataArray.push(newData)
        // fs.writeFile('./dataArray.json', JSON.stringify(dataArray), err => {
        //   if (err) throw err
        // })
        const data = fs.readFileSync('./dataArray.json', {
          encoding: 'utf8',
          flag: 'r'
        })
        const obj = JSON.parse(data)
        const newArr = obj.map(obj => {
          if (obj.id == updateData.id) {
            return { ...obj, updateData }
          }
          return obj
        })
        fs.writeFile('./dataArray.json', JSON.stringify(newArr), err => {
          if (err) throw err
        })
        resolve()
      } else {
        reject(new Error('Invalid data'))
      }
    })
  }

  //   static updateData = (updateData: DataObject): Promise<void> => {

  //     return new Promise((resolve, reject) => {
  //       try {
  //         const data = fs.readFileSync('./dataArray.json', {
  //             encoding: 'utf8',
  //             flag: 'r'
  //         });

  //         const obj = JSON.parse(data)
  //         const newArr = obj.map(obj => {
  //             if (obj.id == updateData.id) {
  //                 return {...obj, updateData};
  //             }
  //             return obj;

  //         });
  //         console.log(newArr);
  //         resolve();

  //       } catch (err) {
  //         reject(new Error('Invalid data'))
  //       }
  //     }
  //   }
}
