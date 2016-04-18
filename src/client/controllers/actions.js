module.exports = class extends React.Component {
	static childContextTypes = {
		actions: React.PropTypes.object
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