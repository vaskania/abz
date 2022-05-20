const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload())


app.post('/post', async (req, res) => {
  console.log(req.files)
  console.log(req.body)
  console.log(req.headers.authorization)
  res.send('received from server')
})

app.listen(port, () => console.log('running on 4000'))