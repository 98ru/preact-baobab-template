import {branch} from 'baobab-react/higher-order'
import Controller from 'controllers'
import Posts from 'components/posts'

export default branch({
	posts: ['posts']
}, class extends Controller {
	componentDidMount() {
		this.pending = this.actions.posts.getPosts(this.dao)
	}

	render() {
		return (
			<Posts {...this.props.posts} />
		)
	}
})