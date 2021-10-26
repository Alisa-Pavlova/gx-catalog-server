import express, { Application } from 'express'

const port = 3000
try {
    const app: Application = express()
    app.get('/', function (req, res) {
      res.send('Hello World')
    })
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`)
      })
} catch (error) {
    console.log(`Error: ${error.message}`)
}