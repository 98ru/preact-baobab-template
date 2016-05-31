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

	componentWillUnmount() {
		this.cancelPending()
	}

	set pending(action) {
		if (action instanceof Promise) {
			Controller.pending.get(this).push(action)
		}
	}

	cancelPending = () => {
		Controller.pending.get(this).forEach((action) => {
			if (action.isPending()) action.cancel()
		})
	}

	render() {
		return this.props.children
	}
}