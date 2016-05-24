import {RestActions} from 'common/actions'
const actions = new RestActions('//jsonplaceholder.typicode.com/posts/(:postId)')

export default {
	get(dao) {
		return actions.get(dao).then((posts) => {
			dao.stateTree.set(['posts', 'items'], posts)
		})
	}
}