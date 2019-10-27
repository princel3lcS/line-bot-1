const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send({
    status: 200,
    message: 'Hello Line bot API.',
    server_time: new Date()
  })
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
