const express = require('express')
const setupMongo = require('./setupMongo')
require('dotenv').config()
const { PORT = 4000 } = process.env

const app = express()
setupMongo()
app.use('/', express.json())

app.use('/api/nominatedbooks', require('./routes/nominatedbooks'))
app.use('/api/recommendedbooks', require('./routes/recommendedbooks'))
app.use(require('./routes/error'))

app.listen(PORT, () => {
  console.log(`Server listen at http://localhost:${PORT}`)
})
