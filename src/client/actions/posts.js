import {RestActions} from 'common/actions'
const actions = new RestActions('//jsonplaceholder.typicode.com/posts/(:postId)')

actions.getPosts = (dao) =>
	actions.get(dao).then((posts) => {
		dao.stateTree.set(['posts', 'items'], posts)
	})

export default actions