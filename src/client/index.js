import Baobab from 'baobab'
import {browserHistory, Router} from 'react-router'
import {root} from 'baobab-react/higher-order'
import * as actions from 'actions'
import Dao from 'common/dao'
import DaoController from 'controllers/dao'
import defaultState from 'state.json'
import routes from 'views/routes'

const stateCursor = new Baobab(defaultState)
const dao = new Dao({actions, defaultState, stateCursor})

const Root = root(stateCursor, () =>
	<DaoController dao={dao}>
		<Router history={browserHistory}>{routes}</Router>
	</DaoController>
)

ReactDOM.render(
	<Root />,
	document.body.appendChild(document.createElement('span'))
)