import {branch} from 'baobab-react/higher-order'
import Controller from 'controllers'
import Posts from 'components/posts'

export default branch({
	posts: ['posts', 'items']
}, class extends Controller {
	componentDidMount() {
		this.pending = this.actions.posts.get(this.dao)
	}

	render() {
		return (
			<Posts posts={this.props.posts} />
		)
	}
})