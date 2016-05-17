import {RestActions} from 'common/actions'
const actions = new RestActions('//jsonplaceholder.typicode.com/users/(:userId)')

actions.getUsers = (dao) =>
	actions.get(dao).then((users) => {
		dao.stateTree.set(['users', 'items'], users)
	})

export default actions