export default {
	setTitle(dao, {title}) {
		dao.stateTree.set(['page', 'title'], title)
		document.title = title
	}
}