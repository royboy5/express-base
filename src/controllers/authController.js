'use strict'

const log = require('../utils/logger')
const User = require('../models/userModel')
const jwt = require('jwt-simple')

const { jwtConfig } = require('../config')
const { MISSING_DATA, USER_EXISTS } = require('../utils/messages')

function tokenForUser (user) {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, jwtConfig.secret)
}

const userGet = (req, res) => {
  log.info('get user')

  res.send('I gotz userzzzzz')
}

const userSignin = (req, res, next) => {
  // res.send({ status: true })
  res.send({ token: tokenForUser(req.user) })
}

const userCreate = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  // see if user exists with email
  if (!email || !password) {
    return res.status(422).send(MISSING_DATA)
  }

  User.findOne({ email: email }, (err, inDb) => {
    if (err) {
      return next(err)
    }

    if (inDb) {
      return res.status(422).send(USER_EXISTS)
    }

    const user = new User({
      email: email,
      password: password
    })

    user.save(err => {
      if (err) {
        return next(err)
      }
      res.json({ token: tokenForUser(user) })
    })
  })
}

module.exports.userGet = userGet
module.exports.userCreate = userCreate
module.exports.userSignin = userSignin
