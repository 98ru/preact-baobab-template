import Controller from 'controllers'
import Layout from 'components/layout'
import PostsController from 'controllers/posts'

export default class extends Controller {
	componentDidMount() {
		this.actions.page.setTitle(this.dao, {
			title: 'Home'
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