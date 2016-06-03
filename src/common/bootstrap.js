import Promise from 'bluebird'
require('babel-runtime/core-js/promise').default = Promise

Promise.config({
	warnings: true,
	cancellation: true,
	longStackTraces: true
})