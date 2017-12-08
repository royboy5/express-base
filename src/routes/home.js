'use strict'

const log = require('../utils/logger')

const express = require('express')
const router = new express.Router()

router.get('/', (req, res) => {
  log.info('Accessed /')
  res.send('Home')
})

module.exports = router
