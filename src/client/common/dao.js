import {clone} from 'common/utils'

export default class Dao {
	static params = new WeakMap()

	constructor({actions, defaultState, stateTree}) {
		Dao.params.set(this, {actions, defaultState, stateTree})
	}

	get actions() {
		return Dao.params.get(this).actions
	}

	get defaultState() {
		return clone(Dao.params.get(this).defaultState)
	}

	get stateTree() {
		return Dao.params.get(this).stateTree
	}
}