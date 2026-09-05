import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes'

dotenv.config()

const app = express() 
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    res.json({
        message: 'Expenso API is running.'
    })
})

app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`)
})