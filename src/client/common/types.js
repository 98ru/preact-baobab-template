import Baobab from 'baobab'

export const PropTypes = {
	actions: React.PropTypes.objectOf(React.PropTypes.objectOf(React.PropTypes.func)),
	tree: React.PropTypes.instanceOf(Baobab)
}

export const ContextTypes = {
	actions: PropTypes.actions,
	tree: PropTypes.tree
}