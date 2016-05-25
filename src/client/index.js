import 'css/index.css'
import * as actions from 'actions'
import Baobab from 'baobab'
import {browserHistory, Router} from 'react-router'
import Dao from 'common/dao'
import DaoController from 'controllers/dao'
import defaultState from 'state.json'
import {root} from 'baobab-react/higher-order'
import routes from 'views/routes'

if (process.env.NODE_ENV === 'development') {
	require('why-did-you-update')(React)
}

const stateTree = new Baobab(defaultState)
const dao = new Dao({actions, defaultState, stateTree})

const Root = root(stateTree, () =>
	<DaoController dao={dao}>
		<Router history={browserHistory}>{routes}</Router>
	</DaoController>
)

ReactDOM.render(
	<Root />, document.getElementById('root')
)