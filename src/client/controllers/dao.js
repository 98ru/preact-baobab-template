export default class extends React.Component {
	static childContextTypes = {
		dao: React.PropTypes.object
	}

	getChildContext() {
		return {
			dao: this.props.dao
		}
	}

	render() {
		return this.props.children
	}
}