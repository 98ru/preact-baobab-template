import {getDefaultState} from 'common/state'

module.exports = {
	set(tree, options) {
		const {page} = getDefaultState()
		const _page = Object.assign(page, options)
		tree.merge('page', _page)
		document.title = _page.title
	}
}