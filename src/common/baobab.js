import Baobab from 'baobab'

export function branch(cursors, Component) {
	return class extends React.Component {
		static contextTypes = {
			tree: React.PropTypes.instanceOf(Baobab)
		}

		constructor(props, context) {
			super(props, context)
			this.watcher = context.tree.watch(cursors)
			this.state = this.watcher.get()
		}

		componentDidMount() {
			this.watcher.on('update', this.onUpdate)
		}

		componentWillUnmount() {
			this.watcher.release()
		}

		onUpdate = () => {
			this.setState(this.watcher.get())
		}

		render() {
			return (
				<Component
					{...this.props}
					{...this.state} />
			)
		}
	}
}

export function root(tree, Component) {
	return class extends React.Component {
		static childContextTypes = {
			tree: React.PropTypes.instanceOf(Baobab)
		}

		getChildContext() {
			return {tree}
		}

		render() {
			return <Component {...this.props} />
		}
	}
}