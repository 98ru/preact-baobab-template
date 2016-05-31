import Controller from 'controllers'
import Layout from 'components/layout'
import PostsController from 'controllers/posts'

export default class extends Controller {
	componentDidMount() {
		this.actions.common.setPageTitle(this.dao, {
			title: 'Posts'
		})
	}

	render() {
		return (
			<Layout>
				<PostsController />
			</Layout>
		)
	}
}