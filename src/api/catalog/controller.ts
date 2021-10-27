import { ICatalogInput } from 'db/models/Catalog'
import { Router, Request, Response } from 'express'
import { getAll, create, update, deleteById, getById, getByName } from './repository'

const catalogRouter = Router()

catalogRouter.get('/', async (req: Request, res: Response) => {
    try {
        const result = await getAll()
        return res.status(200).send(result)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

catalogRouter.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    
    try {
        const result = await getById(id)
        return res.status(200).send(result)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

catalogRouter.get('/name/:name', async (req: Request, res: Response) => {
    const name = req.params.name

    try {
        const result = await getByName(name)
        return res.status(200).send(result)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

catalogRouter.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const catalog: ICatalogInput = req.body

    try {
        const result = await update(Number(id), catalog)
        return res.status(200).send(result)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

catalogRouter.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        await deleteById(Number(id))

        return res.status(204)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

catalogRouter.post('/', async (req: Request, res: Response) => {
    const catalog: ICatalogInput = req.body

    try {
        const result = await create(catalog)
        return res.status(201).send(result)
    } catch (err) {
        return res.status(500).send(err.message)
    }

})

export default catalogRouter