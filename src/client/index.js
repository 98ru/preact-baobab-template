import Baobab from 'baobab'
import {browserHistory, Router} from 'react-router'
import {root} from 'baobab-react/higher-order'
import * as actions from 'actions'
import ActionsController from 'controllers/actions'
import {getDefaultState} from 'common/state'
import routes from 'views/routes'

const Root = root(
	new Baobab(getDefaultState()), () =>
		<ActionsController actions={actions}>
			<Router history={browserHistory}>{routes}</Router>
		</ActionsController>
)

ReactDOM.render(
	<Root />,
	document.body.appendChild(document.createElement('span'))
)