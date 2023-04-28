import express from "express"
import { PORT } from "./config"
import {getEntries, addEntry, deleteEntry} from "./routes/handleMongo"
const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.get('/api/list-data/kalle', async (req, res) => {
    const result = await getEntries("Kalle")
    res.send(result).status(200)
})


app.post('/api/process_data', (req, res) => {
    if (!req.body.summa || !req.body.selgitus) {
        res.status(400).json({ error: 'summa ja selgitus on vajatud' });
        return;
    }

    console.log(req.body)

    const entry = {summa: req.body.summa, selgitus: req.body.selgitus}
    addEntry('Kalle', entry)
});

app.delete('/api/delete_data', (req, res) => {
    console.log(`DELETE REQUEST SENT FOR ${req.body.id}!`)
    deleteEntry("Kalle", req.body.id)
})


app.listen(PORT, () => {
    console.log(`arve api listening on port ${PORT}`)
})






