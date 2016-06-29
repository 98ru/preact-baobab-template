import {clone} from 'common/utils'

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

export class DaoController extends React.Component {
	static childContextTypes = {
		dao: React.PropTypes.object
	}

	getChildContext() {
		return {
			dao: this.props.dao
		}
	}

	render() {
		return this.props.children
	}
}