const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const SignUpSchema = new Schema({
  emailOrPhone: {
    type: String,
    required: true,
    unique: false,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  selectedDefaultImage: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

// Todo:
// Encrypt Passwords

// SignUpSchema.pre('save', async function (next) {
//   try {
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(this.password, salt)
//     this.password = hashedPassword
//     next()
//   } catch (error) {
//     next(error)
//   }
// })
module.exports = mongoose.model('mytables', SignUpSchema)
