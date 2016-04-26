export default {
	set(dao, options) {
		const {page} = dao.defaultState
		const _page = Object.assign(page, options)

		dao.stateCursor.merge('page', _page)
		document.title = _page.title
	}
}