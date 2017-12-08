'use strict'

const express = require('express')
const router = new express.Router()
const passport = require('passport')

const authController = require('../controllers/authController')
const requireAuth = passport.authenticate('local', { session: false })

router.get('/', requireAuth, authController.userSignin)
router.post('/', requireAuth, authController.userSignin)

module.exports = router
