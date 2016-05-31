require('babel-runtime/core-js/promise').default = require('bluebird')
const {isDevelopment} = require('common/utils')
const {whyDidYouUpdate} = require('why-did-you-update')

Promise.config({
	warnings: isDevelopment,
	cancellation: true,
	longStackTraces: isDevelopment
})

if (isDevelopment) {
	whyDidYouUpdate(React)
} else {
	window.addEventListener('unhandledrejection',
		(e) => e.preventDefault())
}

require('./client')