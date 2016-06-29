import 'common/bootstrap'
import * as actions from 'actions'
import Baobab from 'baobab'
import {browserHistory, Router} from 'react-router'
import {Dao, DaoController} from 'common/dao'
import {getDefaultState} from 'common/state'
import {root} from 'common/baobab'
import routes from 'common/routes'

const defaultState = getDefaultState()
const tree = new Baobab(defaultState)
const dao = new Dao({actions, defaultState, tree})
const Root = root(tree, () =>
	<DaoController dao={dao}>
		<Router history={browserHistory}>{routes}</Router>
	</DaoController>
)

function init() {
	ReactDOM.render(<Root />, document.getElementById('root'))
}

if (module.hot) module.hot.accept(init)

init()