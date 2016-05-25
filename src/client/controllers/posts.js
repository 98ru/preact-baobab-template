import {branch} from 'baobab-react/higher-order'
import Controller from 'controllers'
import Posts from 'components/posts'

export default branch({
	location: ['location'],
	posts: ['posts', 'items']
}, class extends Controller {
	componentDidMount() {
		this.pending = this.actions.posts.get(this.dao)
	}

	render() {
		console.log(this.props.location)
		return (
			<Posts posts={this.props.posts} />
		)
	}
})