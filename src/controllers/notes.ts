import { Router, Request, Response } from 'express'
import Notes from '../models/Notes'
const router = Router()

interface Record {
  id: number
  title: string
  body: string
}

interface Delete {
  id: number
}

router.post('/', async (req: Request, res: Response) => {
  const record: Record = req.body
  const obj: Record = {
    id: record.id,
    title: record.title,
    body: record.body
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

router.put('/:id', async (req: Request, res: Response) => {
  const record: Record = req.body
  const obj: Record = {
    id: parseInt(req.params.id),
    title: record.title,
    body: record.body
  }
  const dataResponse = await Notes.updateData(obj)
  res.send({ message: obj })
})

router.delete('/:id', async (req: Request, res: Response) => {
  const record: Delete = req.body

  const obj: Delete = {
    id: parseInt(req.params.id)
  }

  const dataResponse = await Notes.deleteData(obj)

  res.send({ message: dataResponse })
})

export default router
