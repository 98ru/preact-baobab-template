export function Dao(options) {
	let isBound = false

	function autobind(context, actions) {
		Object.keys(actions).forEach(key => {
			const namespace = actions[key]

			Object.keys(namespace)
				.filter(prop => typeof namespace[prop] === 'function')
				.forEach(method =>
					namespace[method] = namespace[method].bind(context))
		})
	}

	return function dao(namespace) {
		const {actions} = options

		if (!isBound) {
			options.dao = dao
			autobind(options, actions)
			isBound = true
		}

		return actions[namespace]
	}
}

export function getDefaultState() {
	return {
		page: {
			title: ''
		}
	}
}