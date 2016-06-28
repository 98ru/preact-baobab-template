import Baobab from 'baobab'

export function root(tree, Component) {
	return class extends React.Component {
		getChildContext() {
			return {tree}
		}

		render() {
			return <Component {...this.props} />
		}
	}
}

export function branch(cursors, Component) {
	return class extends React.Component {
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