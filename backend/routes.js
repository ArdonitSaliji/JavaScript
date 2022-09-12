const express = require('express')
const signUpModel = require('./signUpModels')
const multer = require('multer')
const uuid = require('uuid').v4
const router = express.Router()
const fs = require('fs')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/uploads')
  },
  filename: (req, file, cb) => {
    const { originalname } = file
    cb(null, originalname)
  },
})
const upload = multer({ storage })

router.get('/api/delete-uploads/', (req, res) => {
  const fs = require('fs')

  let DIR = './src/uploads/'

  fs.readdir(DIR, (error, filesInDirectory) => {
    if (error) throw error

    for (let file of filesInDirectory) {
      console.log('File removed : ' + file)
      fs.unlinkSync(DIR + file)
    }
  })
  return res.json({ files: 'All deleted' })
})

router.post('/api/signup/upload', upload.single('filetoupload'), function (req, res) {
  const filePath = req.file.filename
  return res.json({ filePath: filePath })
})

router.post('/api/login', async (req, res) => {
  const email = await signUpModel.find({ emailOrPhone: req.body.emailOrPhone })
  const account = await signUpModel.findOne({
    emailOrPhone: req.body.emailOrPhone,
    password: req.body.password,
  })
  if (account) {
    return res.status(200).send({ login: 'successful' })
  }
  if (email.length < 1 && !account) {
    return res.status(404).send({ login: 'Account does not exist' })
  }
  if (email && !account) {
    return res.status(401).send({ login: 'wrong password' })
  }
})

router.post('/api/signup', async (req, res) => {
  const userExists = await signUpModel.findOne({
    emailOrPhone: req.body.emailOrPhone,
  })
  if (userExists) {
    return res.status(409).json({ error: 'User already exists' })
  }
  if (!userExists) {
    const user = new signUpModel({
      emailOrPhone: req.body.emailOrPhone,
      password: req.body.password,
    })
    const userCreated = await user.save()
    return res.status(201).json({ data: { id: userCreated.id } })
  }
})

module.exports = router
