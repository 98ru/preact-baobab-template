import Promise from 'bluebird'

global.Promise = Promise
Promise.config({
	warnings: true,
	cancellation: true,
	longStackTraces: true
})