import {createHistory} from 'history'
import superagent from 'superagent'

export const clone = (o) =>
	JSON.parse(JSON.stringify(o))

export const request =
	global.Promise.promisifyAll(superagent)

export function storeLocationState(dao, {key}) {
	createHistory().listen(({hash, pathname, search}) => {
		dao.stateTree.set(key, {hash, pathname, search})
		dao.stateTree.commit()
	})
}