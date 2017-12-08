'use strict'

require('dotenv').config()
const log = require('./utils/logger')
const app = require('./app')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.listen(port, host, log.info(`App listening at http://${host}:${port}`))
