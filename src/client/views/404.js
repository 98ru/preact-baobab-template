import Controller from 'controllers'
import Layout from 'components/layout'

export default class extends Controller {
	componentDidMount() {
		this.actions.common.setPageTitle(this.dao, {
			title: '404'
		})
	}

	render() {
		return (
			<Layout>404</Layout>
		)
	}
}