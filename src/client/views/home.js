import Controller from 'controllers'
import Layout from 'components/layout'

export default class extends Controller {
	componentDidMount() {
		this.actions.page.setTitle(this.dao, {
			title: 'Home'
		})
	}

	render() {
		return (
			<Layout>Home</Layout>
		)
	}
}