import Controller from 'controllers'
import {h} from 'preact'
import PostsController from 'controllers/posts'

export default class extends Controller {
	componentDidMount() {
		this.actions.common.setPageTitle(this.dao, {
			title: 'Posts'
		})
	}

	render() {
		return (
			<PostsController />
		)
	}
}