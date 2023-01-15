const express = require('express')
const app = express()

app.use(express.static('Designs'))

app.listen(5500, () => {
  console.log('Server is listening on port 5500')
})
