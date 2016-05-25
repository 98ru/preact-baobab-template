import {createHistory} from 'history'
import Promise from 'bluebird'
import superagent from 'superagent'

global.Promise = Promise
Promise.config({
	warnings: true,
	cancellation: true,
	longStackTraces: true
})

export function storeLocationState(dao, {key}) {
	createHistory().listen(({hash, pathname, search}) => {
		dao.stateTree.set(key, {hash, pathname, search})
		dao.stateTree.commit()
	})
}

export const clone = (o) =>
	JSON.parse(JSON.stringify(o))

export const request =
	Promise.promisifyAll(superagent)