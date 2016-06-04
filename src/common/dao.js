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
			dao: this.props.dao,
			tree: this.props.dao.tree
		}
	}

	render() {
		const {children} = this.props
		return children && children[0] || null
	}
}