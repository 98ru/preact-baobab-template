import {RestActions} from 'common/actions'
const actions = new RestActions('//jsonplaceholder.typicode.com/users/(:userId)')

actions.getUsers = (dao) =>
	actions.get().then((res) => {
		dao.stateTree.set(['users', 'items'], res.body)
	})

export default actions