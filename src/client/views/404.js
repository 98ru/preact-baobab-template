import {ContextTypes} from 'common/types'
import Layout from 'components/layout'

module.exports = class extends React.Component {
	static contextTypes = ContextTypes

	componentDidMount() {
		const {actions, tree} = this.context
		actions.page.set(tree, {title: '404'})
	}

	render() {
		return (
			<Layout>404</Layout>
		)
	}
}