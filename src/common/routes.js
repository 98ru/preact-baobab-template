import NotFoundView from 'views/404'
import PostsView from 'views/posts'
import Router from 'preact-router'

export default (
	<Router>
		<PostsView path="/" />
		<NotFoundView default />
	</Router>
)