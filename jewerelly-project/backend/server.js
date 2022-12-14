const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const port = 5000
const cors = require('cors')
const routesUrls = require('./routes')

app.use(cors())
app.use(express.json())
dotenv.config()
app.use(express.static('public'))
mongoose.connect(
  process.env.DATABASE_ACCESS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Database Connected')
)

app.use('/', routesUrls)

app.listen(port, () => console.log(`Server started at port ${port}`))
