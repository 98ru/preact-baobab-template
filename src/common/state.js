export const getDefaultState = () => ({
	location: {
		hash: '',
		pathname: '',
		search: ''
	},
	page: {
		title: ''
	},
	posts: {
		isLoading: false,
		items: []
	}
})