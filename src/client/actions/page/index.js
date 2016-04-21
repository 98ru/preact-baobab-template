module.exports = {
	set(options) {
		const {page} = this.getDefaultState()
		const _page = Object.assign(page, options)

		this.tree.merge('page', _page)
		document.title = _page.title
	}
}