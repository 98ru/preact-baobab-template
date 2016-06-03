export const handleError = (dao, {message}) => {
	console.warn(message)
}

export const setPageTitle = (dao, {title}) => {
	document.title = title
	dao.tree.set(['page', 'title'], title)
}