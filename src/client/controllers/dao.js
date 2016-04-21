import PropTypes from 'common/types'

module.exports = class extends React.Component {
	static childContextTypes = {
		dao: PropTypes.Dao
	}

	static propTypes = {
		dao: PropTypes.Dao.isRequired,
		children: React.PropTypes.node,
	}

	getChildContext() {
		return {dao: this.props.dao}
	}

	render() {
		return this.props.children
	}
}