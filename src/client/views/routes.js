import {Route} from 'react-router'

module.exports = (
	<Route>
		<Route path="/" component={require('views/home')} />
		<Route path="*" component={require('views/404')} />
	</Route>
)