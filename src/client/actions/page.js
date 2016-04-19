import {getDefaultState} from 'common/state'

module.exports = {
	set(options, tree) {
		const {page} = getDefaultState()
		const _page = Object.assign(page, options)
		tree.merge('page', _page)

		if (process.browser) {
			document.title = _page.title
		}
	}
}