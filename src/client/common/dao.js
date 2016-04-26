import {clone} from 'common/utils'

export default class Dao {
	static options = new WeakMap()

	constructor(options) {
		Dao.options.set(this, options)
	}

	get actions() {
		const options = Dao.options.get(this)
		return options.actions
	}

	get defaultState() {
		const options = Dao.options.get(this)
		return clone(options.defaultState)
	}

	get stateCursor() {
		const options = Dao.options.get(this)
		return options.stateCursor
	}
}