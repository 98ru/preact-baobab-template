import {branch} from 'common/baobab'
import Controller from 'controllers'
import {h} from 'preact'
import Posts from 'components/posts'

export default branch({
	posts: ['posts']
}, class extends Controller {
	constructor(props, context) {
		super(props, context)
		this.pending = this.actions.posts.getPosts(this.dao)
	}

	render() {
		return (
			<Posts {...this.props.posts} />
		)
	}
})