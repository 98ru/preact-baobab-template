export default class Controller extends React.Component {
	static contextTypes = {
		dao: React.PropTypes.object
	}

	static defaultProps = {
		children: null
	}

	static pending = new WeakMap()

	constructor(props, context) {
		super(props, context)
		Controller.pending.set(this, [])
		this.actions = context.dao.actions
		this.dao = context.dao
	}

	set pending(action) {
		Controller.pending.get(this).push(action)
	}

	cancelPending = () => {
		Controller.pending.get(this).forEach((action, i) => {
			if (action.isPending()) {
				action.cancel()
			}
		})
	}

	render() {
		return this.props.children
	}
}