const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./backend/middleware/errorMiddleware')
const port = process.env.PORT || 5000


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use('/api/goals', require('./backend/routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`sever started on port ${port}`))
