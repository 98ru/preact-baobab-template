import {clone} from 'common/utils'

export default class Dao {
	static params = new WeakMap()

	constructor(params) {
		Dao.params.set(this, params)
	}

	get actions() {
		const params = Dao.params.get(this)
		return params.actions
	}

	get defaultState() {
		const params = Dao.params.get(this)
		return clone(params.defaultState)
	}

	get stateTree() {
		const params = Dao.params.get(this)
		return params.stateTree
	}
}