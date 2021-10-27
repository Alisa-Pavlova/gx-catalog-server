import { Router } from 'express'
import catalogRouter from './catalog/controller'
import itemRouter from './item/controller'

const router = Router()

router.use('/catalog', catalogRouter)
router.use('/item', itemRouter)

export default router