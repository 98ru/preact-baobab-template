export default class extends React.Component {
	static propTypes = {
		children: React.PropTypes.node
	}

	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
}