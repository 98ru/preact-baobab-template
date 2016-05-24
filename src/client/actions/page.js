export default {
	setTitle(dao, {title}) {
		dao.stateTree.set(['page', 'title'], title)
		document.title = title
	},

	setError(dao, {error}) {
		const cursor = dao.stateTree.cursor(['page', 'error'])

		if (error.isOperational) {
			const {message} = error
			cursor.set({message})
		} else if (error.response) {
			cursor.set(error.response.body)
		} else if (error instanceof Error){
			throw error
		}
	}
}