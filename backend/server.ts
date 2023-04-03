import express from "express"
import { PORT } from "./config"
import {getEntries, addEntry} from "./routes/handleMongo"
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.get('/api/list-data/kalle', async (req, res) => {
    const result = await getEntries("Kalle")
    res.send(result).status(200)
})


app.post('/api/list-data/kalle', (req,res) => {
    let data = req.body
    console.log('new entry added', data)
    res.status(200)
})


app.listen(PORT, () => {
    console.log(`arve api listening on port ${PORT}`)
})






