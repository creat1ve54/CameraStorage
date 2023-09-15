require('dotenv').config()

const express = require('express')
const sequelize = require('./db')

const PORT = process.env.PORT || 5002
const cors = require('cors');
const router = require('./routes/index')
const models = require('./models/models')

const app = express()


app.use(cors())
app.use(express.json())

app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()