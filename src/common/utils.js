import superagent from 'superagent'

export const clone = (o) =>
	JSON.parse(JSON.stringify(o))

export const getId = new function() {
	let id = +new Date
	return () => id++
}

export const request = Promise.promisifyAll(superagent)