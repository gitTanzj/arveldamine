import express from "express"
import { PORT } from "./config"
import {getEntries} from "./routes/getForm"
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/favicon.ico', (req, res) => {
    res.status(204)
})


app.get('/api/list-data/kalle', async (req, res) => {
    const result = await getEntries("Kalle").catch(console.dir)
    res.send(result).status(200)
})

app.listen(PORT, () => {
    console.log(`arve api listening on port ${PORT}`)
})






