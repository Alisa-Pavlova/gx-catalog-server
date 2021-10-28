import { IItemInput } from 'db/models/Item'
import { Router, Request, Response } from 'express'
import { create, update, deleteById, getById, getByName, getBySearch} from './repository'

const ItemRouter = Router()

ItemRouter.get('/item/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    try {
        const result = await getById(id)
        return res.status(200).send(result)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

ItemRouter.get('/search', async (req: Request, res: Response) => {
    const { searchString, catalogId } = req.query

    try {
        const result = await getBySearch(Number(catalogId), searchString.toString())
        return res.status(200).send(result)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

ItemRouter.get('/name/:name', async (req: Request, res: Response) => {
    const { name } = req.params

    try {
        const result = await getByName(name.toString())
        return res.status(200).send(result)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

ItemRouter.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const Item: IItemInput = req.body
    
    try {
        const result = await update(Number(id), Item)
        return res.status(200).send(result)
    } catch (err) {
        return res.status(500).send(err.message)
}
})

ItemRouter.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    
    try {
        await deleteById(Number(id))
        return res.status(204).send()
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

ItemRouter.post('/', async (req: Request, res: Response) => {
    const item: IItemInput = req.body
    
    try {
        const result = await create(item)
        return res.status(201).send(result)
    } catch (err) {
        return res.status(500).send(err.message)
}
})

export default ItemRouter