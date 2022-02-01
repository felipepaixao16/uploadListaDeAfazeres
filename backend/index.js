const express = require('express')
const cors = require('cors')

const Tasks = require('./routes')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/tasks', Tasks)

app.listen(8080, () => console.log('Tudo ok'))