import {ContextTypes} from 'common/types'
import Layout from 'components/layout'

module.exports = class extends React.Component {
	static contextTypes = ContextTypes

	componentDidMount() {
		const {actions, tree} = this.context
		actions.page.set({title: '404'}, tree)
	}

	render() {
		return (
			<Layout>404</Layout>
		)
	}
}