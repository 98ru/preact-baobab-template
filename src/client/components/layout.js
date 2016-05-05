export default class extends React.Component {
	render() {
		return (
			<div className="layout container">{this.props.children}</div>
		)
	}
}