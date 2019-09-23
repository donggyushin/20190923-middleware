import express from 'express';
import { testMiddleware } from './middlewares/testMiddleware'
const app = express()
app.use(testMiddleware)
const PORT = 4000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))