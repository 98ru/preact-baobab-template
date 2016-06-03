import Controller from 'controllers'
import {h} from 'preact'

export default class extends Controller {
	componentDidMount() {
		this.actions.common.setPageTitle(this.dao, {
			title: 'Home'
		})
	}

	render() {
		return (
			<div>Home</div>
		)
	}
}