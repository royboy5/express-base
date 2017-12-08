'use strict'

const log = require('../utils/logger')

const express = require('express')
const router = new express.Router()
const authController = require('../controllers/authController')
const passportService = require('../utils/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false })

router.get('/', requireAuth, (req, res) => {
  log.info('Accessed /')
  res.send('Home')
})

module.exports = router
