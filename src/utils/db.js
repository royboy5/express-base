const { db: { mongodb }, logging } = require('../config')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const log = require('./logger')

mongoose.connect(mongodb.uri, { useMongoClient: true }, err => {
  // If db connection fails
  if (err) {
    log.error(err)
  } else if (logging.query) {
    log.info('Connected to MongoDb!')
  }
})

module.exports = mongoose
