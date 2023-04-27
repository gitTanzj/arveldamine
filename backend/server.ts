import express from "express"
import { PORT } from "./config"
import {getEntries, addEntry} from "./routes/handleMongo"
import bodyParser from 'body-parser';
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


app.listen(PORT, () => {
    console.log(`arve api listening on port ${PORT}`)
})






