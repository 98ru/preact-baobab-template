import {RestActions} from 'common/actions'
const actions = new RestActions('//jsonplaceholder.typicode.com/posts/(:postId)')

actions.getPosts = (dao) =>
	actions.get().then((res) => {
		dao.stateTree.set(['posts', 'items'], res.body)
	})

export default actions