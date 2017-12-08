'use strict'

const { logging } = require('../config')
const winston = require('winston')
const moment = require('moment')

module.exports = new winston.Logger({
  transports: [
    new winston.transports.Console({
      timestamp () {
        return moment().format('MM-DD-YYYY HH:mm:ss')
      },
      level: logging.level,
      handleExceptions: true,
      json: false,
      colorize: true,
      prettyPrint: true
    })
  ],
  exitOnError: false
})
