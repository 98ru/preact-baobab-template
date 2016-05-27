require('babel-runtime/core-js/promise').default = require('bluebird')
const isDevelopment = process.env.NODE_ENV === 'development'

Promise.config({
	warnings: isDevelopment,
	cancellation: true,
	longStackTraces: isDevelopment
})

require('./client')