import {createHistory} from 'history'

export const handleError = (dao, {message}) => {
	console.warn(message)
}

export const setPageTitle = (dao, {title}) => {
	document.title = title
	dao.stateTree.set(['page', 'title'], title)
}

export const storeLocationState = (dao, {key}) => {
	createHistory().listen(({hash, pathname, search}) => {
		dao.stateTree.set(key, {hash, pathname, search})
		dao.stateTree.commit()
	})
}