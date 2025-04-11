import express from 'express'
import userRouter from './routers/UserRouters.js'
import productRouter from './routers/ProductRouters.js'
import cors from 'cors'
import mongoose from 'mongoose'

mongoose.connect('process.env.MONGODB_URI')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', userRouter)
app.use('/api', productRouter)


app.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:${process.env.PORT}3000')
})