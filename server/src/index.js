const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb://localhost:27017/node-angular')

app.use(cors())
app.use(express.json())
app.use('/api', require('./routes'))

const port = 8000

app.listen(port, () => {
  console.log('Servidor rodando na porta ' + port)
})
