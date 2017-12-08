'use strict'

const db = require('../utils/db')
const Schema = db.Schema
const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true
    },
    password: String
  },
  {
    timestamps: true
  }
)

// Salting and hashing user password before it is saved
userSchema.pre('save', function (next) {
  const user = this

  // salting password
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }
    // hashing password
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err)
      }

      // using hash as password
      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err)
    }

    callback(null, isMatch)
  })
}

const model = db.model('User', userSchema)

module.exports = model
