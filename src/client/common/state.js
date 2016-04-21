export class Dao {
	static bindActions(context, actions) {
		Object.keys(actions).forEach(key => {
			const namespace = actions[key]

			Object.keys(namespace)
				.filter(prop => typeof namespace[prop] === 'function')
				.forEach(method =>
					namespace[method] = namespace[method].bind(context))
		})
	}

	constructor(options) {
		let isBound = false

		function dao(namespace) {
			const {actions} = options

			if (!isBound) {
				options.dao = dao
				Dao.bindActions(options, actions)
				isBound = true
			}

			return actions[namespace]
		}

		Object.setPrototypeOf(dao, Dao.prototype)
		return dao
	}
}

export function getDefaultState() {
	return {
		page: {
			title: ''
		}
	}
}