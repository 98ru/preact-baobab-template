import {RestActions} from 'common/actions'
const actions = new RestActions('//jsonplaceholder.typicode.com/posts/(:postId)')

export const getPosts = (dao) => {
	const cursor = dao.tree.select('posts')
	cursor.set('isLoading', true)

	return actions.get(dao)
		.then((posts) => {
			cursor.set('items', posts)
		})
		.finally(() => {
			cursor.set('isLoading', false)
		})
}