import * as actions from 'actions'
import {getDefaultState} from 'common/state'

describe('actions.page', () => {
	const {page} = getDefaultState()
	const tree = new Baobab({page})
	const title = 'test'

	it('sets a document title', () => {
		actions.page.set(tree, {title})
		tree.get('page', 'title').should.be.equal(title)
		document.title.should.be.equal(title)
	})
})