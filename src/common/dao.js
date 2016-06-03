import {clone} from 'common/utils'
import {Component, h} from 'preact'

export class Dao {
	static params = new WeakMap()

	constructor({actions, defaultState, tree}) {
		Dao.params.set(this, {actions, defaultState, tree})
	}

	get actions() {
		return Dao.params.get(this).actions
	}

	get defaultState() {
		return clone(Dao.params.get(this).defaultState)
	}

	get tree() {
		return Dao.params.get(this).tree
	}
}

export class DaoController extends Component {
	getChildContext() {
		return {
			dao: this.props.dao
		}
	}

	render() {
		return this.props.children[0]
	}
}