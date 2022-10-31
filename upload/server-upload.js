const express = require('express')

const formidable = require('formidable')

const app = express()
app.use(express.static('public'))

app.post('/upload', upload.single('file'), (req, res) => {
  return res.json({ status: 'ok' })
})

app.listen(4000, () => console.log('Server 4000 working'))
