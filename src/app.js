'use strict'

const path = require('path')
const utils = require('require-all')(path.join(__dirname, 'utils'))
const routes = require('require-all')(path.join(__dirname, 'routes'))
const log = utils.logger

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

log.info('App Starting')

app.disable('x-powered-by')
app.use(bodyParser.json({ type: 'application/json' }))

app.use('/', routes.home)
app.use('/signup', routes.signup)
app.use('/signin', routes.signin)

module.exports = app
