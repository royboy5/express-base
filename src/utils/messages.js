'use strict'

// Error Messages

module.exports.MISSING_DATA = {
  status: 'Error',
  message: 'Please provide an email, and password'
}

module.exports.USER_NOT_FOUND = {
  status: 'Error',
  message: 'User not found'
}

module.exports.USER_EXISTS = {
  status: 'Error',
  message: 'User already exists'
}

module.exports.ACCESS_DENIED = {
  status: 'Error',
  message: 'Access was denied'
}
