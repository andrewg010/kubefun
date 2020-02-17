const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>' + JSON.stringify(req.query))
})

app.listen(3000, () => {
  console.log('Listening...')
})
