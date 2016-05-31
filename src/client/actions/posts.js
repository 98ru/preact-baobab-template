import {RestActions} from 'common/actions'
const restActions = new RestActions('//jsonplaceholder.typicode.com/posts/(:postId)')

export const getPosts = (dao) => {
	const cursor = dao.stateTree.select('posts')
	cursor.set('isLoading', true)

	return restActions.get(dao)
		.then((posts) => {
			cursor.set('items', posts)
		})
		.finally(() => {
			cursor.set('isLoading', false)
		})
}