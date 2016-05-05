import {Redirect, Route} from 'react-router'

export default (
	<Route>
		<Route path="/" component={require('views/home').default} />

		<Route path="/posts/" component={require('views/posts').default} />
		<Redirect from="/posts" to="/posts/" />

		<Route path="/users/(:userId)" component={require('views/users').default} />
		<Redirect from="/users" to="/users/" />

		<Route path="*" component={require('views/404').default} />
	</Route>
)