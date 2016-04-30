import Layout from 'components/layout'
import PropTypes from 'common/prop-types'

export default class extends React.Component {
	static contextTypes = {
		dao: PropTypes.Dao
	}

	componentDidMount() {
		const {dao} = this.context
		dao.actions.page.set(dao, {
			title: 'Home'
		})
	}

	render() {
		return (
			<Layout>Home</Layout>
		)
	}
}