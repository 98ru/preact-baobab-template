import PropTypes from 'common/types'

export default class extends React.Component {
	static childContextTypes = {
		dao: PropTypes.Dao
	}

	static propTypes = {
		dao: PropTypes.Dao.isRequired,
		children: React.PropTypes.node,
	}

	getChildContext() {
		return {
			dao: this.props.dao
		}
	}

	render() {
		return this.props.children
	}
}