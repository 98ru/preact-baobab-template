import 'common/bootstrap'
import * as actions from 'actions'
import Baobab from 'baobab'
import {Dao, DaoController} from 'common/dao'
import {getDefaultState} from 'common/state'
import {h, render} from 'preact'
import routes from 'common/routes'

const defaultState = getDefaultState()
const dao = new Dao({
	actions,
	defaultState,
	tree: new Baobab(defaultState)
})

function init() {
	render(
		<DaoController dao={dao}>{routes}</DaoController>,
		root, root.lastChild
	)
}

if (module.hot) {
	module.hot.accept(init)
}

init()