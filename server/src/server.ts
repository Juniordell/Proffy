import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

// Route Params: identificar qual recurso eu quero atualizar ou deletar ex: /:id
// Query Params

app.listen(3333)