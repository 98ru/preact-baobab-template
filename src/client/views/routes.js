import {Redirect, Route} from 'react-router'

export default (
	<Route>
		<Redirect from="/" to="/posts/" />

		<Route path="/posts/" component={require('views/posts').default} />
		<Redirect from="/posts" to="/posts/" />

		<Route path="*" component={require('views/404').default} />
	</Route>
)