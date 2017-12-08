'use strict'

require('dotenv').config()

module.exports = {
  logging: {
    level: process.env.LOG_LEVEL || 'debug',
    query: true
  },

  db: {
    mongodb: {
      uri: process.env.DB_URI
    }
  },

  jwtConfig: {
    secret: process.env.JWT_SECRET
  }
}
