import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { KJUR } from 'jsrsasign'
import { toStringArray } from './utils.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 4000

app.use(express.json(), cors())
app.options('*', cors())


app.listen(port, () => console.log(`Zoom Video SDK Auth Endpoint Sample Node.js, listening on port ${port}!`))
