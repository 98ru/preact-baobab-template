import Layout from 'components/layout'
import PropTypes from 'common/types'

module.exports = class extends React.Component {
	static contextTypes = {
		dao: PropTypes.Dao
	}

	componentDidMount() {
		const {dao} = this.context
		dao.actions.page.set(dao, {title: '404'})
	}

	render() {
		return (
			<Layout>404</Layout>
		)
	}
}