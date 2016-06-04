import 'common/bootstrap'
import * as actions from 'actions'
import Baobab from 'baobab'
import {Dao, DaoController} from 'common/dao'
import {Component, h, render} from 'preact'
import {getDefaultState} from 'common/state'
import {root} from 'common/baobab'
import routes from 'common/routes'

const defaultState = getDefaultState()
const tree = new Baobab(defaultState)
const dao = new Dao({actions, defaultState, tree})

// HACK: functional components break lyfecycle methods,
// using a class-based component to fix this.
// https://github.com/developit/preact/issues/175
const Root = root(tree, class extends Component {
	render() {
		return <DaoController dao={dao}>{routes}</DaoController>
	}
})

function init() {
	const appRoot = document.getElementById('root')
	render(<Root />, appRoot, appRoot.lastChild)
}

if (module.hot) module.hot.accept(init)

init()