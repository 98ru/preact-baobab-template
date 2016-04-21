import Baobab from 'baobab'
import {browserHistory, Router} from 'react-router'
import {root} from 'baobab-react/higher-order'
import * as actions from 'actions'
import {Dao, getDefaultState} from 'common/state'
import DaoController from 'controllers/dao'
import routes from 'views/routes'

const tree = new Baobab(getDefaultState())
const dao = new Dao({actions, getDefaultState, tree})

const Root = root(tree, () =>
	<DaoController dao={dao}>
		<Router history={browserHistory}>{routes}</Router>
	</DaoController>
)

ReactDOM.render(
	<Root />,
	document.body.appendChild(document.createElement('span'))
)