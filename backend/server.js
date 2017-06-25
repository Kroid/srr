const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 8080

const express = require('express')
const app = express()

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api', require('./app/controllers/http'));

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})