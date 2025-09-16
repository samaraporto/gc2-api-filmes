import express from 'express'
import { filmesRouter } from './routes/filmes'
const app = express()
app.use(express.json())
app.listen(8000, ola)
app.use(filmesRouter)
function ola(){
    console.log('executando no port 8000');
}