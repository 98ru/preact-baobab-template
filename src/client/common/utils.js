import Promise from 'bluebird'
import superagent from 'superagent'

global.Promise = Promise
Promise.config({
	warnings: true,
	cancellation: true,
	longStackTraces: true
})

export const clone = (o) =>
	JSON.parse(JSON.stringify(o))

export const request =
	Promise.promisifyAll(superagent)