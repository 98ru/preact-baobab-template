import Controller from 'controllers'
import Layout from 'components/layout'
import UsersController from 'controllers/users'

export default class extends Controller {
	componentDidMount() {
		this.actions.page.setTitle(this.dao, {
			title: 'Users'
		})
	}

	render() {
		return (
			<Layout>
				<UsersController />
			</Layout>
		)
	}
}