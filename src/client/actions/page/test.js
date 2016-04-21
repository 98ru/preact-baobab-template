describe('actions.page', () => {
	const {page} = getDefaultState()
	const tree = new Baobab({page})
	const dao = Dao({actions, getDefaultState, tree})
	const title = 'test'

	it('sets a document title', () => {
		dao('page').set({title})
		tree.get('page', 'title').should.be.equal(title)
		document.title.should.be.equal(title)
	})
})