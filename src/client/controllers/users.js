import {branch} from 'baobab-react/higher-order'
import Controller from 'controllers'
import Users from 'components/users'

export default branch({
	users: ['users', 'items']
}, class extends Controller {
	componentDidMount() {
		this.pending = this.actions.users.getUsers(this.dao)
	}

	componentWillUnmount() {
		this.cancelPending()
	}

	render() {
		return (
			<Users users={this.props.users} />
		)
	}
})