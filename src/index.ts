import express, { Application } from 'express'
import routes from './api/router'
import { port } from './config'
import dbInit from 'db'
import cors from 'cors'

try {
    const app: Application = express()

    dbInit()

    app.use(express.json())
    app.use(cors({ origin: '*' }))
    app.use('/api/v1', routes)
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`)
    })
} catch (error) {
    console.log(`Error: ${error.message}`)
}