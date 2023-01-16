const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./Designs'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Designs/homepage.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('Resource not found')
})

app.listen(5500, () => {
  console.log('Server is listening on port 5500...')
})
