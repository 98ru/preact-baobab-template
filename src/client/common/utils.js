import bluebird from 'bluebird'
import superagent from 'superagent'

global.Promise = bluebird
bluebird.config({
	warnings: true,
	cancellation: true,
	longStackTraces: true
})

export const clone = (o) =>
	JSON.parse(JSON.stringify(o))

export const request =
	Promise.promisifyAll(superagent)