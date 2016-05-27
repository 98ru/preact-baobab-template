require('babel-runtime/core-js/promise').default = require('bluebird')

Promise.config({
	warnings: true,
	cancellation: true,
	longStackTraces: true
})

require('./client')