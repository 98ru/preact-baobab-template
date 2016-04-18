module.exports = class extends React.Component {
	static propTypes = {
		children: React.PropTypes.node
	}

	render() {
		<div>{this.props.children}</div>
	}
}