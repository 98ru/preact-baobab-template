import {PropTypes} from 'common/types'

module.exports = class extends React.Component {
	static childContextTypes = {
		actions: PropTypes.actions
	}

	static propTypes = {
		actions: PropTypes.actions.isRequired,
		children: React.PropTypes.node
	}

	getChildContext() {
		return {
			actions: this.props.actions
		}
	}

	render() {
		return this.props.children
	}
}