import actions from 'actions'
import routes from 'views/routes'
import ActionsController from 'controllers/actions'
const {browserHistory, Router} = ReactRouter

ReactDOM.render(
	<ActionsController actions={actions}>
		<Router history={browserHistory}>{routes}</Router>
	</ActionsController>,
	document.getElementById('root')
)