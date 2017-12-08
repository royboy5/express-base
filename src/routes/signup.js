'use strict'

const express = require('express')
const router = new express.Router()

const authController = require('../controllers/authController')

router.get('/', authController.userGet)
router.post('/', authController.userCreate)

module.exports = router
