import {Route} from 'react-router'

export default (
	<Route>
		<Route path="/" component={require('views/home').default} />
		<Route path="*" component={require('views/404').default} />
	</Route>
)