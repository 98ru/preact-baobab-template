describe('actions.page', () => {
	const stateCursor = new Baobab(defaultState)
	const dao = new Dao({actions, defaultState, stateCursor})
	const title = 'test'

	it('sets a document title', () => {
		dao.actions.page.set(dao, {title})
		dao.stateCursor.get('page', 'title').should.be.equal(title)
		document.title.should.be.equal(title)
	})
})