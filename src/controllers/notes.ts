import { Router, Request, Response } from 'express'
import Notes from '../models/Notes'
const router = Router()

interface Record {
  id: number
  name: string
}

router.post('/', async (req: Request, res: Response) => {
  const record: Record = req.body
  const obj: Record = {
    id: record.id,
    name: record.name
  }
  const dataResponse = await Notes.addData(obj)
  res.send({ message: obj })
})

router.get('/', async (req: Request, res: Response) => {
  const dataResponse = await Notes.getData()
  res.send({ message: dataResponse })
})

router.get('/:id', async (req: Request, res: Response) => {
  const dataResponse = await Notes.getDataId(req.params.id)
  res.send({ message: dataResponse })
})

export default router
