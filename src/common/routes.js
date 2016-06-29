import {Route} from 'react-router'

export default (
	<Route>
		<Route path="/" component={require('views/posts')} />
		<Route path="*" component={require('views/404')} />
	</Route>
)