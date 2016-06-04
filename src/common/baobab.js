import {Component, h} from 'preact'
import Baobab from 'baobab'

export function root(tree, WrappedComponent) {
	return class extends Component {
		getChildContext() {
			return {tree}
		}

		render() {
			return <WrappedComponent {...this.props} />
		}
	}
}

export function branch(cursors, WrappedComponent) {
	return class extends Component {
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
				<WrappedComponent
					{...this.props}
					{...this.state} />
			)
		}
	}
}