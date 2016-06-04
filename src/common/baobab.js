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
			this.watcher.on('update', this.onUpdate)
			this.state = this.watcher.get()
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