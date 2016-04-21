module.exports = class extends React.Component {
	static childContextTypes = {
		dao: React.PropTypes.func
	}

	static propTypes = {
		dao: React.PropTypes.func.isRequired,
		children: React.PropTypes.node,
	}

	getChildContext() {
		return {dao: this.props.dao}
	}

	render() {
		return this.props.children
	}
}