const express = require('express')
const multer = require('multer')

const app = express()
const port = 3000
app.use(express.static('public'));

//multer options
const upload = multer({
  dest: 'images'
  })

app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.sendFile('index.html');
})

app.post('/upload', upload.single('upload'), (req, res) => {
  res.send()
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})