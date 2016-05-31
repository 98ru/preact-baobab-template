import 'css/index.css'
import * as actions from 'actions'
import Baobab from 'baobab'
import {browserHistory, Router} from 'react-router'
import Dao from 'common/dao'
import DaoController from 'controllers/dao'
import defaultState from 'state.json'
import {root} from 'baobab-react/higher-order'
import routes from 'views/routes'

const stateTree = new Baobab(defaultState)
const dao = new Dao({actions, defaultState, stateTree})
actions.common.storeLocationState(dao, {key: 'location'})

const Root = root(stateTree, () =>
	<DaoController dao={dao}>
		<Router history={browserHistory}>{routes}</Router>
	</DaoController>
)

ReactDOM.render(
	<Root />, document.getElementById('root')
)